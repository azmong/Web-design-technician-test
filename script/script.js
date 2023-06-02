$(function(){

    $("#gnb").hover(function(){

        $(".submenu").stop().slideDown();
        $("#gnb_bg").stop().slideDown();

    }, function(){

        $(".submenu").stop().slideUp();
        $("#gnb_bg").stop().slideUp();
    });

    setInterval(function(){

        $("#slide_img").animate({
            left:"-1200px"
        }, function(){
            $("#slide_img li").eq(0).appendTo("#slide_img");
            $("#slide_img").css({left:0});
        });

    },3000);

});