// document.addEventListener('DOMContentLoaded', function () {
//     // Plain JavaScript for expand and collapse

//     var menuBtn = document.querySelector('.menu-btn');
//     var sideBar = document.querySelector('.side-bar');
//     var closeBtn = document.querySelector('.close-btn');

//     menuBtn.addEventListener('click', function () {
//         sideBar.classList.add('active');
//         menuBtn.style.visibility = 'hidden';
//     });

//     closeBtn.addEventListener('click', function () {
//         sideBar.classList.remove('active');
//         menuBtn.style.visibility = 'visible';
//     });

//     // Plain JavaScript for toggle
//     var subBtn = document.querySelector('.sub-btn');
//     var subMenu = document.querySelector('.sub-menu');
//     var dropdown = document.querySelector('.dropdown');

//     subBtn.addEventListener('click', function () {
//         subMenu.classList.toggle('active');
//         dropdown.classList.toggle('rotate');
//     });
// });


$('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css('visibility','hidden');
})
// for close button 
$('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css('visibility','visible');
});
//jQuery for toggle 
$('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
})








