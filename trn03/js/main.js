const HD=document.querySelector('#hd');

window.addEventListener('scroll', ()=>{
    let sct=window.scrollY;
    sct>0 ? HD.classList.add('on') : HD.classList.remove('on')
});

const totopBtn=document.querySelector('#totop');

totopBtn.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior:'smooth'})
})


const mainSlier = new Swiper('.main_slider', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 100,
    autoplay:{
        delay:2000,
    },
    pagination: {
        el: '.main_visual .page',
        type: "fraction",
    },
    navigation: {
        nextEl: '.main_visual .btn_next',
        prevEl: '.main_visual .btn_prev',
    },
    autoplayDisableOnInteraction:false,

});