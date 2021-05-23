const hb = document.querySelector('.mobile-menu-btn');
const li = document.querySelector('.hmbtn');
hb.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('menu-open');
})
li.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('menu-open');
})

// const mo = document.querySelector('.menu-open');
// const li = document.querySelector('a');
// li.addEventListener('click', () => {	
// 	mo.style.display = "none";	
// }, false);

// $(document).ready('.mobile-menu-btn').on('click', function() {
//     $('.menu-open').click(); // .menuをクリックした時と同じ処理

//     return false; //a要素のリンク先移動防ぐ
//   });

// $(document).ready('a[href^="#"]').on('click', function() {
//     $('.menu-open').click(); // .menuをクリックした時と同じ処理

//     return false; //a要素のリンク先移動防ぐ
//   });

// $(function() {
//     $('.item a[href]').on('click', function(event) {
//         $('.menu-open').trigger('click');
//         if ($(this).hasClass('active')) {
//             $('body').addClass('active');
//         } else {
//             $('body').removeClass('active');
//         }        
//     });
// });

// $('.item a[href]').on('click', function(event) {
//     $('.menu-open').trigger('click');
// });

// const mo = document.querySelector('.menu-open');

// const li = document.querySelector('.item');
// li.addEventListener('click', () => {	
// 	mo.style.display = "none";
// }, false);


// const menu = document.querySelectorAll('.item');
// menu.addEventListener('click', function() {
//     document.querySelector('body').classList.toggle('menu-open');
// })

// function cl() {
//     const hb = document.querySelector('.mobile-menu-btn');
//     const li = document.querySelectorAll('.item')
//     .addEventListener('click', function() {
//         document.querySelector('body').classList.toggle('menu-open')
// })
// }

