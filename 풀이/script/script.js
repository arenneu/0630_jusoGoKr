/* eslint-disable */

$(function(){

    /* GNB메뉴 시작 */
    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").stop().show();
        $("div#gnbBGFrame").stop().show();
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").hide();
        $("div#gnbBGFrame").hide();
    });
    /* GNB메뉴 끝 */

    /* 주소검색 시작 */
    $("input#searchWord").keyup(function(){
        var txt = $("input#searchWord").val(); // 변수:값을 임시저장

        // txt에 저장된 값이 비어있는 공백(="")이 아니라면
        // 제이쿼리의 css를 사용하여 x마크를 표시하세요

        if (txt == "") {  // 텍스트박스의 값이 공백이라면 x마크를 숨김
            $("span#closeMark").css({"visibility":"hidden"});
        }

        if (txt != "") { // 텍스타박스이 값이 공백이 아니라면 x마크를 표시
            $("span#closeMark").css({"visibility":"visible"});
        }





    });
    /* 주소검색 끝 */

});
