
        function map_ajax() {
            $.ajax({
                type: "GET", //요청 메소드 방식
                url: "https://api.odcloud.kr/api/15089317/v1/uddi:23f5d02f-0047-46c8-a938-defadc2ab4" +
                        "7c?page=1&perPage=17&serviceKey=kaNhli8GqMsaJWwxkmtdGA2teu0ASErqgA4w6Y%2BqAd32" +
                        "hwQ59bJq8iCS3tbl4iA20GU17tYMPlPZEeEhHhGgxg%3D%3D",
                async: false, //ajax로 받아온 변수를 전역변수로 만들 수 있음
                dataType: "json", //서버가 요청 URL을 통해서 응답하는 내용의 타입
                //async: false,
                success: function (data) {
                    arrayCitycolor = new Array();
                    arrayCityinfo = new Array();
                    for (i = 0; i < 17; i++) {
                        css_color(data["data"][i]["거리 두기 단계"]);
                        arrayCitycolor.push(city_color);
                        arrayCityinfo.push(data["data"][i]["거리 두기 비고"]);
                    };
                    var vue_color = new Vue({

                        el: '#vue_map_color',
                        data: {
                            soul: {
                                "fill": arrayCitycolor[0]
                            },
                            busan: {
                                "fill": arrayCitycolor[1]
                            },
                            daegu: {
                                "fill": arrayCitycolor[2]
                            },
                            incheon: {
                                "fill": arrayCitycolor[3]
                            },
                            gwangju: {
                                "fill": arrayCitycolor[4]
                            },
                            daejeon: {
                                "fill": arrayCitycolor[5]
                            },
                            ulsan: {
                                "fill": arrayCitycolor[6]
                            },
                            sejong: {
                                "fill": arrayCitycolor[7]
                            },
                            gyeonggi: {
                                "fill": arrayCitycolor[8]
                            },
                            gangwondo: {
                                "fill": arrayCitycolor[9]
                            },
                            chungbuk: {
                                "fill": arrayCitycolor[10]
                            },
                            chungnam: {
                                "fill": arrayCitycolor[11]
                            },
                            jeonbuk: {
                                "fill": arrayCitycolor[12]
                            },
                            jeonnam: {
                                "fill": arrayCitycolor[13]
                            },
                            gyeongbuk: {
                                "fill": arrayCitycolor[14]
                            },
                            gyeongnam: {
                                "fill": arrayCitycolor[15]
                            },
                            jeju: {
                                "fill": arrayCitycolor[16]
                            }
                        }
                    });

                },
                error: function (xhr, status, errorThrown) {
                    console.log(errorThrown);
                }
            });
        };
        function masseg(a3) {

            alert(arrayCityinfo[a3])
        };

        function css_color(step_cityname) {
            if (step_cityname == 4) {
                city_color = "#ff0000";
            } else if (step_cityname == 3) {
                city_color = "#ec5b4a";
            } else if (step_cityname == 2) {
                city_color = "#ff7b00";
            } else {
                city_color = "#f1c40f";
            };
        };