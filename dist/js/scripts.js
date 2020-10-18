(function($){
  "use strict";


  /* Owl Carousel
  -------------------------------------------------------*/
  function initOwlCarousel(){

    $('.js-minwp-single-item').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      // autoplay: true,
      // autoplaySpeed: 2000,
    });

    $('.js-minwp-multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });
  }


    // Init
    $(document).ready(function(){
      initOwlCarousel();
    });


})(jQuery);
