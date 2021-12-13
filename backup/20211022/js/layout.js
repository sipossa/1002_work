$(function(){
//---------------------------------------------
$('#TabContent li').on('click', function(){
    //$(this) 이벤트가 적용되는 대상 이것.
    //$(this).index() 이벤트가 적용되는 대상 이것의 index번호 0,1,2...
    //console.log() ()안의 값을 개발자도구 콘솔창에 나타내라.
    //변수 값을 넣어놓는 저장소 메모리 var 이름=값; let const 
    //함수 어떤 일을 저장해놓는 저장소;
    var idx=$(this).index();
    //console.log(idx);
    $(this).addClass('oo').siblings().removeClass('oo');
    $('#TabContent .tab>div').eq(idx).addClass('oo').siblings().removeClass('oo');

});

//----------------------------------------------
});