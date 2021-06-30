/* eslint-disable */

$(function(){
    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").stop().slideDown(20);
        $("div#gnbBG").stop().slideDown(20);
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().hide();
        $("div#gnbBG").stop().hide();
    });

});
