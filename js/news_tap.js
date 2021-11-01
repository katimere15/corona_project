function news_tap() {
    $.ajax({
        type: "GET", //요청 메소드 방식
        url: "https://api.odcloud.kr/api/15069309/v1/uddi:d2dba5c8-9ee5-45e3-aabf-98d95f0374" +
                "fe?page=1&perPage=3&serviceKey=kaNhli8GqMsaJWwxkmtdGA2teu0ASErqgA4w6Y%2BqAd32h" +
                "wQ59bJq8iCS3tbl4iA20GU17tYMPlPZEeEhHhGgxg%3D%3D",
        async: false, //ajax로 받아온 변수를 전역변수로 만들 수 있음
        dataType: "json", //서버가 요청 URL을 통해서 응답하는 내용의 타입
        //async: false,
        success: function (data) {
            corona_news_data = new Array();
            corona_news_data = data;
            new Vue({
                el: '#corona_news',
                data: {
                    news1: corona_news_data['data'][0]['제목'],
                    news2: corona_news_data['data'][1]['제목'],
                    news3: corona_news_data['data'][2]['제목']
                }

            });
        },
        error: function (xhr, status, errorThrown) {
            console.log(errorThrown);
        }
    })
};
function callFunction(num) {
    news_link();

    if (num == 0) {
        location.href = link1;
    } else if (num == 1) {
        location.href = link2;
    } else {
        location.href = link3;
    }
}
function news_link() {
    link1 = corona_news_data['data'][0]['주소'];
    link2 = corona_news_data['data'][1]['주소'];
    link3 = corona_news_data['data'][2]['주소'];
};