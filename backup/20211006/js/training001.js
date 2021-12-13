$(function(){

    $(".잼민이").on("click",function(){
        $("h1").hide();
    });

    $("#오징어").on("click",function(){
        $("h1").show();
    });

    $(".나는버튼").on("click",function(){
        $("figure").toggleClass("on")
    });


});