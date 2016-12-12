jQuery(function($){
  var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
    });
    
});
window.onload = function() {
    var logo = $("#logo p");
    TweenLite.to(logo, 2, {top:"50px"});
}