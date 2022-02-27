$(".main_content").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
});
$(".main__review-slider-item").slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".main__review").scroll(function () {
  var x = $(this).scrollTop();
  $(this).css("background-position", "50% " + parseInt(-y / 10) + "px");
});
