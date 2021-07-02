/* eslint-disable */

$(function(){

    /* GNB메뉴 시작 */
    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").show();
        $("div#gnbBGFrame").show();
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

    /* 검색 내용 제거(closeMark 버튼) 시작 */
        // 1차기능 -> closeMark 클릭
        // 2차기능 -> 텍스트박스(input="text") 내용 제거
    $("span#closeMark").click(function(){

        $("input#searchWord").val("");
        $(this).css({"visibility":"hidden"});
        // 1차 기능에서 선택자로 지정된 항목이 추가기능에서 동일하게 지정될때 this 선택자를 사용함
        // 여기서 this=span#closeMark
    });
    /* 검색 내용 제거(closeMark 버튼) 끝 */

    /* 검색창 실행 시작 */
        // 검색창이 공백일 때 검색 실행 버튼을 누르면 경고창을 발생하여 내용을 입력하도록 유도
        // 사용자에게 올바른 행동을 유도하는 코드를 작성하는 것을 "JS 유효성 검사"라고 한다.

    /* 검색창 실행 끝 */
    $("span#searchMark").click(function(){

        var txt = $("input#searchWord").val(); //변숰

        if (txt == ""){ // if 조건식 또는 if 조건문
             alert("검색어을(를) 입력해주세요!");
        }

        if (txt != ""){ // 검색어가 공백이 아니라면 데이터 전송
            $("form").submit();
        }

        // 텍스트박스에 포커스 설정하기
        // $("선택자").포커스설정기능(); -> focus()
        $("input#searchWord").focus();

    });
});
