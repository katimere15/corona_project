
function table_ajax() {
    $.ajax({
        type: "GET", //요청 메소드 방식
        url: "./table1.php",
        dataType: "json", //서버가 요청 URL을 통해서 응답하는 내용의 타입
        //async: false,
        success: function (data) {
            console.log(data);
            table_echo(data);
            chart_info(data);
        },
        error: function (xhr, status, errorThrown) {
            console.log(errorThrown);
        }
    });
};
function table_echo(a1){
    total_decideCnt = a1['item'][0]['decideCnt'];
    total_careCnt = a1['item'][0]['careCnt'];
    total_clearCnt = a1['item'][0]['clearCnt'];
    total_accDefRate = a1['item'][0]['accDefRate'];
    total_deathCnt = a1['item'][0]['deathCnt'];


$('.decideCnt').html(total_decideCnt);
$('.careCnt').html(total_careCnt);
$('.clearCnt').html(total_clearCnt);
$('.accDefRate').html(total_accDefRate);
$('.deathCnt').html(total_deathCnt);


};
function chart_info(a2){
//날짜
sevendaysage = a2['item'][6]['stateDt'];
sixaysage = a2['item'][5]['stateDt'];
fivedaysage = a2['item'][4]['stateDt'];
foredaysage = a2['item'][3]['stateDt'];
threedayage = a2['item'][2]['stateDt'];
yesterday = a2['item'][1]['stateDt'];
today = a2['item'][0]['stateDt'];
//당일 부터 일주일 전까지 확진자 수 
today_decideCnt = a2['item'][0]['decideCnt'];
yesterday_decideCnt = a2['item'][1]['decideCnt'];
threedayage_decideCnt = a2['item'][2]['decideCnt'];
foredaysage_decideCnt = a2['item'][3]['decideCnt'];
fivedaysage_decideCnt = a2['item'][4]['decideCnt'];
sixaysage_decideCnt = a2['item'][5]['decideCnt'];
sevendaysage_decideCnt = a2['item'][6]['decideCnt'];
finish_decideCnt = a2['item'][7]['decideCnt'];
//전날 대비 확진자 증감 수
decideCnt1 = today_decideCnt - yesterday_decideCnt;
decideCnt2 = yesterday_decideCnt - threedayage_decideCnt;
decideCnt3 = threedayage_decideCnt - foredaysage_decideCnt;
decideCnt4 = foredaysage_decideCnt - fivedaysage_decideCnt;
decideCnt5 = fivedaysage_decideCnt - sixaysage_decideCnt;
decideCnt6 = sixaysage_decideCnt - sevendaysage_decideCnt;
decideCnt7 = sevendaysage_decideCnt - finish_decideCnt;
//치료완료 환자 수
today_clearCnt = a2['item'][0]['clearCnt'];
yesterday_clearCnt = a2['item'][1]['clearCnt'];
threedayage_clearCnt = a2['item'][2]['clearCnt'];
foredaysage_clearCnt = a2['item'][3]['clearCnt'];
fivedaysage_clearCnt = a2['item'][4]['clearCnt'];
sixaysage_clearCnt = a2['item'][5]['clearCnt'];
sevendaysage_clearCnt = a2['item'][6]['clearCnt'];
finish_clearCnt = a2['item'][7]['clearCnt'];
//전날 대비 치료완료 환자 수
clearCnt1 = today_clearCnt - yesterday_clearCnt;
clearCnt2 = yesterday_clearCnt - threedayage_clearCnt;
clearCnt3 = threedayage_clearCnt - foredaysage_clearCnt;
clearCnt4 = foredaysage_clearCnt - fivedaysage_clearCnt;
clearCnt5 = fivedaysage_clearCnt - sixaysage_clearCnt;
clearCnt6 = sixaysage_clearCnt - sevendaysage_clearCnt;
clearCnt7 = sevendaysage_clearCnt - finish_clearCnt;
//사망자 수
today_deathCnt = a2['item'][0]['deathCnt'];
yesterday_deathCnt = a2['item'][1]['deathCnt'];
threedayage_deathCnt = a2['item'][2]['deathCnt'];
foredaysage_deathCnt = a2['item'][3]['deathCnt'];
fivedaysage_deathCnt = a2['item'][4]['deathCnt'];
sixaysage_deathCnt = a2['item'][5]['deathCnt'];
sevendaysage_deathCnt = a2['item'][6]['deathCnt'];
//그래프
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {    

// The type of chart we want to create
type: 'bar',

// The data for our dataset
data: {
    labels: [sevendaysage,sixaysage,fivedaysage,foredaysage,threedayage,yesterday,today],
    datasets: [{
        label: '치료 완료 환자 수',
        type : 'line',         // 'line' type
        fill : false,         // 채우기 없음
        lineTension : 0.2,  // 0이면 꺾은선 그래프, 숫자가 높을수록 둥글해짐
        pointRadius : 0,    // 각 지점에 포인트 주지 않음
        backgroundColor: 'rgb(255, 153, 0)',
        borderColor: 'rgb(255, 153, 0)',
        data: [clearCnt7,clearCnt6, clearCnt5, clearCnt4, clearCnt3, clearCnt2, clearCnt1]
    }, {
        label: '사망자 수',
        type : 'line',
        fill : false,
        lineTension : 0.2,
        pointRadius : 0,
        backgroundColor: 'rgb(255, 204, 0)',
        borderColor: 'rgb(255, 204, 0)',
        data: [sevendaysage_deathCnt,sixaysage_deathCnt, fivedaysage_deathCnt, foredaysage_deathCnt, threedayage_deathCnt, yesterday_deathCnt, today_deathCnt]
    }, {
        label: '확진자 증가 수',
        type : 'bar', // 'bar' type, 전체 타입과 같다면 생략가능
        backgroundColor: 'rgb(255, 204, 102)',
        borderColor: 'rgb(255, 204, 102)',
        data: [decideCnt7,decideCnt6, decideCnt5, decideCnt4, decideCnt3, decideCnt2, decideCnt1]
    }, 
]
},

// Configuration options
options: {
    legend: {
         labels: {
              fontColor: 'white' // label color
             }
          },
    scales: {
        // y축
        yAxes: [{
            stacked: true,
            ticks: {
                fontColor:'white' // y축 폰트 color
            }
         }],
         // x축
         xAxes: [{
             stacked: true,
            ticks: {
                fontColor:'white' // x축 폰트 color
            }
         }]
    }
}
});
};
