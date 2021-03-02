$(function () {

  const body = $('body');
  const lockPadding = $('.lock-padding');

  let unlock = true;

  const timeout = 300;

  $('.shop-content__btn').on('click', function () {
     bodyLock();
    $('.shop__filter-wrapper').addClass('shop__filter-wrapper--active');
    $('.shop__filter').addClass('shop__filter--active');
    $('.shop__filter-wrapper').on('click', function (e) {
      if (!e.target.closest('.shop__filter')) {
        filterClose(e.target.closest('.shop__filter-wrapper'));
      }
    });
  });

 
  const filterCloseIcon = $('.filter-close');
  if (filterCloseIcon.length > 0) {
    filterCloseIcon.on('click', function (e) {
      filterClose(filterCloseIcon.closest('.shop__filter-wrapper'));
      e.preventDefault();
    });
  }
  
  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      if ($('.shop__filter-wrapper--active').length > 0) {
        filterClose();
      }
    }
  });

  function filterClose() {
    const filterActive = $('.shop__filter-wrapper.shop__filter-wrapper--active');
      filterActive.removeClass('shop__filter-wrapper--active');
      $('.shop__filter').removeClass('shop__filter--active');
      bodyUnlock();
  }

  function bodyLock() {
    const lockpaddingValue = $(window).outerWidth() - $('.container-small').outerWidth();

    if (lockPadding.length > 0) {
      lockPadding.css("padding-right", lockpaddingValue);
    }
    body.css("padding-right", lockpaddingValue);
    body.addClass('no-scroll');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      lockPadding.css("padding-right", "0px");
      body.css("padding-right", "0px");
      body.removeClass('no-scroll');
    }, timeout);
  }



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


  $('.form-price__from, .form-price__to').on('change', function () {
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
  $(window).on('load resize', function () {
    if ($(window).width() < 470) {
      $('#popular__items:not(.slick-initialized)').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 370,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      });
    } else {
      $("#popular__items.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function(){
    if ($(window).width() < 768) {
      $('#product__inner:not(.slick-initialized)').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1.5 ,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000
            }
          }
        ]
      });
    }else{
      $("#product__inner.slick-initialized").slick("unslick");
    }
  });

  $('.btn-menu').on('click', function(){
    $('.menu-box').toggleClass('menu-box--active');
    $('.btn-menu').toggleClass('btn-menu--close');
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
    asNavFor: '.product-slider__small',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          draggable: true
        }
      },
    ]
  });

  $('.shop-content__select, .product-one__input').styler();


  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
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

  $(window).on('load resize', function () {
    $('.partners__inner').slick({
      slidesToShow: 4,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }
      ]
    });
  });

  $('.header-content__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.sale__counter');
    const daysSpan = clock.querySelector('.sale__counter-days');
    const hoursSpan = clock.querySelector('.sale__counter-hours');
    const minutesSpan = clock.querySelector('.sale__counter-minutes');
    const secondsSpan = clock.querySelector('.sale__counter-seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.sale__counter').attr('data-time');
  initializeClock('sale__counter', deadline);


  
 

});