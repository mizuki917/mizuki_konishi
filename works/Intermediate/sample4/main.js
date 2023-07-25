document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const hMenu = document.querySelector('.hMenu');

    const reason1 = document.querySelector('.reason__wrapper');
    const reason2 = document.querySelector('.reason__wrapper:last-child');
    const voice1 = document.querySelector('.voice__inner');
    const voice2 = document.querySelector('.voice__inner:nth-child(2)');
    const voice3 = document.querySelector('.voice__inner:nth-child(3)');

    const menuLinks = document.querySelectorAll('.menu__link');
    const menuBtn = document.querySelector('.menu__btn');

    // 関数
    // メニューオープン
    function menuToggle() {
        body.classList.toggle('menuOpen');
    }

    // スクロール
    const cb = (entries, observe) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('slide');
                observe.unobserve(entry.target);
            }
        });
    }
    
    // メニューリムーブ
    function menuRemove() {
        body.classList.remove('menuOpen');
    }

    // 実行文
    // メニューオープン
    hMenu.addEventListener('click', menuToggle);

    // スクロール
    const io = new IntersectionObserver(cb);
    io.observe(reason1);
    io.observe(reason2);
    io.observe(voice1);
    io.observe(voice2);
    io.observe(voice3);

    // メニューリムーブ
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', menuRemove)});
    menuBtn.addEventListener('click', menuRemove);
    
    
    });