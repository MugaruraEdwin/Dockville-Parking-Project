$(document).ready(function(){
    // jQuery for expand and collapse

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
    
})