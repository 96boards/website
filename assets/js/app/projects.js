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
    
window.shuffleInstance = new window.Shuffle(document.getElementById('grid'), {
  itemSelector: '.project-item',
  sizer: '.my-sizer-element',
});