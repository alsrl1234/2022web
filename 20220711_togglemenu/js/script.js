// $(".toggleMenu").click(function(){
//     $(".topMenu").addclass("active")
// })

let view =true;
$(".toggleMenu").click(function(){
    if( view == true){
        $(".topMenu").addClass("active");
        view = false;
    }else{
        $(".topMenu").removeClass("active");
        view = true;
    }
})