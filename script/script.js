$(function(){

    $("#gnb").hover(function(){

        $(".submenu").stop().slideDown();

    }, function(){

        $(".submenu").stop().slideUp();

    });

    setInterval(function(){
        $("#slide_img").animate({
            top:"-300px"
         }, function(){
            $("#slide_img>li").eq(0).appendTo("#slide_img");
            $("#slide_img").css({top:0});
         });
    }, 3000);

    $("#tab > ul > li:first-child").click(function(){

        $("#tab > ul > li:last-child").removeClass(".on");

        $("#notice").show();
        $("#gallery").hide();

    });

    $("#tab > ul > li:last-child").click(function(){

        $("#tab > ul > li:first-child").removeClass(".on");

        $("#notice").hide();
        $("#gallery").show();

    });

});
