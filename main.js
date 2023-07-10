document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const hMenu = document.querySelector('.header__hMenu');
    const hMenuUl = document.querySelector('.header__hMenuUl');

    function menuOpen() {
        body.classList.toggle('menuOpen');
    };
    function menuRemove() {
        body.classList.remove('menuOpen');
    };
    hMenu.addEventListener('click', menuOpen);
    hMenuUl.addEventListener('click', menuRemove);

});