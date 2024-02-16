var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 300,
    freeMode: true,
    touchStartPreventDefault: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});