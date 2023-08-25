// ハンバーガーメニュー
const hMenu = document.querySelector('.hMenu');
const body = document.querySelector('body');

hMenu.addEventListener('click', menuOpen);
function menuOpen() {
    body.classList.toggle('menuOpen');
}

// スクロールイベント
const features = document.querySelectorAll('.feature__inner');
const options = {
    threshold: 0.5
}

const io = new IntersectionObserver(cb, options);

features.forEach((feature) => {
    io.observe(feature);
})


function cb(entries) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('up');
        } 
    });
}
