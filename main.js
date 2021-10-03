let searchHeader = document.querySelector('.search-header');
document.querySelector('#search-btn').onclick = () =>{
    searchHeader.classList.toggle('active');
}
let menu = document.querySelector('#bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let shoppingManu =document.querySelector('.container');
document.querySelector('#shopping').onclick = () =>{
    shoppingManu.classList.toggle('active');
}
let loginMenu = document.querySelector('.login');
document.querySelector('#user').onclick = () =>{
    loginMenu.classList.toggle('active');
}
var swiper = new Swiper(".container-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
});
var swiper = new Swiper(".container", {
    spaceBetween: 20,
    loop:true,
    centeredSlide: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor:true,
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        991: {
        slidesPerView: 3,
        },
    },
});
$('.controls .buttons').click(function(){
    $(this).addClass('button-active').siblings().removeClass('button-active');
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .image').show(400);
    }else{
        $('.gallery .image').not('.'+filter).hide(200);
        $('.gallery .image').filter('.'+filter).show(400);
    }
});
var swiper = new Swiper(".container-slide", {
    spaceBetween: 15,
    loop:true,
    centeredSlide: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor:true,
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        991: {
        slidesPerView: 3,
        },
    },
});