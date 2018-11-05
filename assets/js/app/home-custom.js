$(document).ready(function() {

  var homeCarousel = $(".home-carousel");
  var specificationCarousel = $(".specification-carousel");
  var blogCarousel = $(".blog-carousel");

  homeCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: true,
              nav: false
          },
          475:{
              items: 2,
              dots: true,
              nav: false
          }
      }
  });
  
  specificationCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: true,
              nav: false
          },
          560:{
              items: 2,
              dots: true,
              nav: false
          }
      }
  });
  blogCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: true,
              nav: false
          },
          676:{
              items:2,
              dots: true,
              nav: false
          }
      }
  });
  $('.carousel').carousel();
});