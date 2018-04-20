$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.project-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
