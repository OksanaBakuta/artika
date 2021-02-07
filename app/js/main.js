$(function () {

  $('.shop-content__select').styler();

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

  function getTimeRemaining(endtime) {
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

  function initializeClock(id, endtime) {
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


});