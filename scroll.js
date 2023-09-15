const copyLists = document.querySelectorAll('.main__li');
gsap.registerPlugin(ScrollTrigger);

// 演出対象となる要素を取得
copyLists.forEach((copyList) => {
    gsap.from(copyList, {
        y: 128,
        opacity: 0.5,
        duration: 1.5,
        ease: "power4.out",
        // スクロールトリガーの設定
        scrollTrigger: {
            trigger: copyList, // 対象物
        },
    });
});