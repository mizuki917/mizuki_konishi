document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const hMenu = document.querySelector('.hMenu');
    const mask = document.querySelector('.mask');
    const BTT = document.querySelector('.BTT');
    const mainContainer = document.querySelector('.main__container');
    
    function menuOpen() {
        body.classList.toggle('menuOpen');
    }
    function menuClose() {
        body.classList.remove('menuOpen');
    }
    hMenu.addEventListener('click', menuOpen);
    mask.addEventListener('click', menuClose);

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        console.log(scrollY);
        if(scrollY > 700) {
            BTT.style.display = 'block';
        } else {
            BTT.style.display = 'none';
        }
    })

    BTT.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })

    const options = {
        threshold: 0.5
    }

    const io = new IntersectionObserver(cb, options);
    io.observe(mainContainer);

    function cb(entries) {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                mainContainer.classList.add('gradation');
            } 
        });
    }
})