document.addEventListener('DOMContentLoaded', () => {
    const hMenu = document.querySelector('.header__hMenu');
    const body = document.querySelector('body');
    const curtain = document.querySelector('.curtain');
    function menuToggle() {
        body.classList.toggle('menuOpen');
    }
    function menuClouse() {
        body.classList.remove('menuOpen');
    }
    hMenu.addEventListener('click', menuToggle);
    curtain.addEventListener('click', menuClouse);
    
})
