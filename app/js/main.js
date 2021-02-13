$(function () {

  $('.form-price__num').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.form-price__from').val(data.from);
      $('.form-price__to').val(data.to);
    },
    onChange: function (data) {
      $('.form-price__from').val(data.from);
      $('.form-price__to').val(data.to);
    }
  });

  
  $('.form-price__from, .form-price__to').on('change', function(){
    var my_range = $(".form-price__num").data("ionRangeSlider");
    var clas = $(this).attr('class');
    var val;
    if (clas == 'form-price__from') {
      val = $('.form-price__from').val();
      my_range.update({
        from: val
      });
    } if (clas == 'form-price__to') {
      val = $('.form-price__to').val();
      my_range.update({
        to: val
      });
    } 
  });


  $('.reviews__btn').on('click', function(){
    $(this).parents('.reviews__inner').addClass('reviews__inner--form');
  });

  $('.product-one__tub').on('click', function(e){
    e.preventDefault();

    $('.product-one__tub').removeClass('product-one__tub--active');
    $(this).addClass('product-one__tub--active');

    $('.product-one__tubs-item').removeClass('product-one__tubs-item--active');
    $($(this).attr('href')).addClass('product-one__tubs-item--active');
  });

  $('.blog-item__slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g><path d="M 6.132812 7.464844 L 2.414062 11.183594 C 2.15625 11.441406 1.742188 11.441406 1.488281 11.183594 L 0.871094 10.566406 C 0.613281 10.308594 0.613281 9.894531 0.871094 9.640625 L 3.503906 7.003906 L 0.871094 4.367188 C 0.613281 4.109375 0.613281 3.695312 0.871094 3.441406 L 1.484375 2.816406 C 1.742188 2.558594 2.15625 2.558594 2.410156 2.816406 L 6.128906 6.535156 C 6.390625 6.792969 6.390625 7.207031 6.132812 7.464844 Z M 6.132812 7.464844 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g><path d="M 0.867188 6.535156 L 4.585938 2.816406 C 4.84375 2.558594 5.257812 2.558594 5.511719 2.816406 L 6.128906 3.433594 C 6.386719 3.691406 6.386719 4.105469 6.128906 4.359375 L 3.496094 7 L 6.132812 9.636719 C 6.390625 9.894531 6.390625 10.308594 6.132812 10.5625 L 5.515625 11.183594 C 5.257812 11.441406 4.84375 11.441406 4.589844 11.183594 L 0.871094 7.464844 C 0.609375 7.207031 0.609375 6.792969 0.867188 6.535156 Z M 0.867188 6.535156 "/></g></svg></button>',
  });

  $('.product-slider__small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-slider__big',
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });
  
  $('.product-slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.product-slider__small'
  });

  $('.shop-content__select, .product-one__input').styler();


  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  const popupCall = $("[data-modal]");
  const popupClose = $("[data-close]");
  
  popupCall.on('click', function(e){
    e.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('open');
  });

  popupClose.on('click', function(e){
    e.preventDefault();

    let $this = $(this);
    let modalParents = $this.parents('.popup');

    modalParents.removeClass('open');
  });

  $('.popup').on('click', function(){
    $(this).removeClass('open');
  });

  $('.popup__content').on('click', function(e){
    e.stopPropagation();
  });

  document.addEventListener('keydown', function(e){
    if (e.keyCode == 27) {
      if ($('.open').length > 0) {
        $('.popup').removeClass('open');
      }
    }
  });

  
  $('.popup__input--tel').mask('+38(000)000-00-00');

  $('.partners__inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.header-content__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

 /*  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(endtime) {
    var clock = document.querySelector('.sale__counter')
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.sale__counter').attr('data-time');
  initializeClock('sale__counter', deadline);
 */

});