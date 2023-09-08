gsap.registerPlugin(ScrollTrigger);
const hTitle = document.querySelector('.header__title');
const info = document.querySelector('.info');
const galleryTitle = document.querySelector('.gallery-title');
const galleryImgs = document.querySelectorAll('.gallery__img');
const targets = [hTitle, info, galleryTitle];
const gallery = document.querySelector('.gallery');
const hMenu = document.querySelector('.titleMenu__hMenu');
const openMenu = document.querySelector('.menu');
const body = document.querySelector('body');
const boxLink = document.querySelector('.boxLink');
const bgi = document.querySelector('.bgi');
const access = document.querySelector('.access');
const menuLinks = document.querySelectorAll('.menu__link');

hMenu.addEventListener('click', () => {
    body.classList.toggle('open');
})
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {

        body.classList.remove('open');
    })
    
})


// 演出対象となる要素を取得
targets.forEach(target => {
    gsap.from(target, {
        y: 150,
        opacity: 0,
        duration: 3,
        ease: "power4.out",
        // スクロールトリガーの設定
        scrollTrigger: {
            trigger: target// 対象物
        },
    });
});

galleryImgs.forEach(galleryImg => {
    gsap.from(galleryImg, {
        y: 200,
        opacity: 0,
        duration: 3,
        ease: "power4.out",
        // スクロールトリガーの設定
        scrollTrigger: {
            trigger: galleryImg// 対象物
        },
    });
});




window.addEventListener('scroll', () => {
    let y = window.scrollY;
    console.log(y);





    // ヘッダー
    if (y >= 500) {
        body.classList.add('opa1');
    } else if (y <= 499) {
        body.classList.remove('opa1');
    }

    let elems = document.querySelectorAll('.mv__img');
    //現在のスクロール位置を取得して、10で除算
    let scrollY = window.scrollY / 10;
    let scrollY2 = window.scrollY / 11;

    const mediaQuery900 = window.matchMedia('(min-width: 900px)');
    const mediaQuery2 = window.matchMedia('(min-width: 600px)');
    const mediaQuery3 = window.matchMedia('(max-width: 699px)');
    const mediaQuery4 = window.matchMedia('(max-width: 599px)');
    const mediaQuery5 = window.matchMedia('(min-width: 480px)');
    const mediaQuery6 = window.matchMedia('(max-width: 479px)');
    const mediaQuery7 = window.matchMedia('(min-width: 700px)');
    const mediaQuery8 = window.matchMedia('(max-width: 899px)');

    // ページが読み込まれた時に実行
    handle(mediaQuery900);
    handle2(mediaQuery2, mediaQuery3, mediaQuery4, mediaQuery5, mediaQuery6, mediaQuery7, mediaQuery8);

    // ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
    mediaQuery900.addListener(handle);
    mediaQuery2.addListener(handle2);

    function handle2(mm, mm2, mm3, mm4, mm5, mm6, mm7) {
        // 479以下
        if(mm5.matches) {
            // background
            if (y >= 3900) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
            else if (y >= 3500) {
                bgi.style.display = 'block';
                gallery.style.opacity = '0';


            }
            else if (y <= 3499) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
        }
        // 480px以上599以下
         else if (mm3.matches && mm4.matches) {
            // background
            if (y >= 5400) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
            else if (y >= 4700) {
                bgi.style.display = 'block';
                gallery.style.opacity = '0';


            }
            else if (y <= 3099) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }

            // box link
            if (y >= 6000) {
                boxLink.classList.remove('view');
            }
            else if (y >= 500) {
                boxLink.classList.add('view');

            } else if (y <= 499) {
                boxLink.classList.remove('view');
            }

            // 600以上699以下
        } else if (mm.matches && mm2.matches) {
            // background
            if (y >= 6500) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
            else if (y >= 5400) {
                bgi.style.display = 'block';
                gallery.style.opacity = '0';


            }
            else if (y <= 5399) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }

            // box link
            if (y >= 5000) {
                boxLink.classList.remove('view');
            }
            else if (y >= 500) {
                boxLink.classList.add('view');

            } else if (y <= 499) {
                boxLink.classList.remove('view');
            }
            // 700以上899以下
        } else if(mm6.matches && mm7.matches) {
            // background
            if (y >= 6800) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
            else if (y >= 6000) {
                bgi.style.display = 'block';
                gallery.style.opacity = '0';


            }
            else if (y <= 5399) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
        }
        else {
            // background
            if (y >= 5300) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }
            else if (y >= 4300) {
                bgi.style.display = 'block';
                gallery.style.opacity = '0';


            }
            else if (y <= 4299) {
                bgi.style.display = 'none';
                gallery.style.opacity = '1';
            }

            // box link
            if (y >= 4000) {
                boxLink.classList.remove('view');
            }
            else if (y >= 1000) {
                boxLink.classList.add('view');

            } else if (y <= 999) {
                boxLink.classList.remove('view');
            }
        }
    }
    function handle(mm) {
        if (mm.matches) {
            // ウィンドウサイズ900px以下のときの処理
            //上で取得した値と画像幅を加算して、elemの背景サイズに設定
            elems.forEach((elem) => {
                elem.style.width = 33.3333 + scrollY + '%';
            })


        } else {
            // それ以外の処理
            elems.forEach((elem) => {
                elem.style.width = 100 - scrollY2 + '%';
            })
        }


        // elem.style.transform = translateY(-0 +  scrollY + '%' );


    }
})

