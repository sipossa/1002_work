$(function(){
//-------------------------------------------------------
    $('#main').fullpage({
        anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
        //navigation: true,
        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.now').text(txt);
            destination.index===0 ? $('.header').fadeIn() : $('.header').fadeOut();
            destination.index===0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
        },
    });



    
//-------------------------------------------------------
})




