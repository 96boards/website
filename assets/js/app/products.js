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

if($('.mixitup-container').length) {
    var mixer = mixitup('.mixitup-container', {
        selectors: {
            target: '.product-item',
            control: '[data-mixitup-control]'
        },
        animation: {
            effects: 'fade translateZ(-100px)',
            duration: 300
        }
    });
    $filterSelect = $('.filter-select');
    $container = $('.mixitup-container');
    $filterSelect.on('change', function(){
        mixer.filter(this.value);
    });
}



$(window).on('load', function () {
    var selectedBoards = [];
    $(".board-checkbox").change(function () {
        var board = $(this).data("board");
        if (this.checked) {
            if($.inArray(board, selectedBoards) === -1){
                selectedBoards.push(board);
            }
        }
        else{
            if ($.inArray(board, selectedBoards) != -1) {
                selectedBoards.splice($.inArray(board, selectedBoards), 1);
            }
        }
    });
    $("#compare-boards-btn").on("click", function(){
        var compareBoardsUrl = "/products/compare/?board=";
        // Add the selected boards to the modal list
        $.each(selectedBoards, function(index,value){
            $(".boards-to-compare").append("<li class='list-group-item'>" + value + "</li>");
            var isLastElement = index == selectedBoards.length -1;
            if (isLastElement) {
                compareBoardsUrl = compareBoardsUrl + value;
            }
            else{
                compareBoardsUrl = compareBoardsUrl + value + ",";
            }
        });
        // Set the Get params for the compare boards button in the modal
        $("#compare-btn").attr("href", compareBoardsUrl);
        // Toggle the modal
        $("#compare-boards-modal").modal("show");
        console.log("Comparing the following boards:");
        console.log(selectedBoards);
    });
});
