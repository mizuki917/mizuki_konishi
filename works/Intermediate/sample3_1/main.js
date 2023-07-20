document.addEventListener('DOMContentLoaded', () => {
    const hMenu = document.querySelector('.header__hMenu');
    const body = document.querySelector('body');
    // const header = document.querySelector('.header');
    function menuToggle() {
        body.classList.toggle('menuOpen');
    }
    hMenu.addEventListener('click', menuToggle);
    
})