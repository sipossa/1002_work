window.addEventListener('load', function(){

    const sec = document.querySelectorAll('.ani');
    window.addEventListener("scroll", ()=>{
            let sct=window.scrollY;
            sec.forEach((e,idx)=>{
                let secTop = sec[idx].offsetTop;
                sct > secTop -300 ? e.classList.remove('on') : sec[idx].classList.add('on')
                console.log(itmTop)
            });

    });




})


