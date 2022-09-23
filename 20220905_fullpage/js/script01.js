$("#fullpage").fullpage();

$(".nav_menu li").click(function(){
    $(".nav_menu li").removeClass("active")
    $(this).addClass("active")
    console.log("ok")
})