$(".itemWrap>li").click(function(){
    $("#image>p").hide();
    $("#image>p").eq($(this).index()).show();
    console.log($(this).index())
})
let current = 0;
$(".right").click(function(){
    current++
    console.log(current)
    if(current < 3){
    $(".itemWrap").css("left",current*-760)
    }else{
        current = 2 ;
    }     
})

$(".left").click(function(){
    current--
    console.log(current)
    if(current > -1){
    $(".itemWrap").css("left",current*-760)
    }else{
        current = 0 ;
    }     
})