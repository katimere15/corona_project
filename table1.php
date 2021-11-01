<?php
$today = date('Ymd');
$yesterweek = date("Ymd", strtotime("-8 day")); 

$ch = curl_init();
$url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'; /*URL*/
$queryParams = '?' . urlencode('serviceKey') . '=kaNhli8GqMsaJWwxkmtdGA2teu0ASErqgA4w6Y%2BqAd32hwQ59bJq8iCS3tbl4iA20GU17tYMPlPZEeEhHhGgxg%3D%3D'; /*Service Key*/
$queryParams .= '&' . urlencode('pageNo') . '=' . urlencode('1'); /**/
$queryParams .= '&' . urlencode('numOfRows') . '=' . urlencode('10'); /**/
$queryParams .= '&' . urlencode('startCreateDt') . '=' . urlencode($yesterweek); /**/
$queryParams .= '&' . urlencode('endCreateDt') . '=' . urlencode($today); /**/

curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
$response = curl_exec($ch);
curl_close($ch);

//var_dump($response);

function produce_XML_object_tree($raw_XML) { // XML노드를 PHP Object자료형으로 변경하는 함수
    libxml_use_internal_errors(true);
    try {
        $xmlTree = new SimpleXMLElement($raw_XML);
    } catch (Exception $e) { // Something went wrong.
        $error_message = 'SimpleXMLElement threw an exception.';
        foreach(libxml_get_errors() as $error_line) {
            $error_message .= "\t" . $error_line->message;
        }
        trigger_error($error_message);
        return false;
    }
    return $xmlTree;
};

$cont = produce_XML_object_tree($response); // XML노드를 Object 형태로 전환
$body = $cont->body;
$items = $body->items;

function objectToArray($d) { // Object 형태를 배열로 전환하는 함수
    if (is_object($d))	$d = get_object_vars($d);
    if (is_array($d))	return array_map(__FUNCTION__, $d);
    else				return $d;
};

$itemer =  json_encode(objectToArray($items));
// json_encode() => php 배열을 json로 변환해주는 함수 
echo $itemer;
?>