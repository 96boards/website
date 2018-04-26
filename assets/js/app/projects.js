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

var mixer = mixitup('.mixitup-container', {
    selectors: {
        target: '.project-item'
    },
    animation: {
        duration: 300
    }
});


$filterSelect = $('.filter-select');
$container = $('.mixitup-container');

$filterSelect.on('change', function(){
    mixer.filter(this.value);
});



