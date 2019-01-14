$(window).on('load', function () {
    // Enabled the multiselect plugin
    $("#compare-96boards-select").multiselect();
    // Get URL param function
    function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    // Get all the Url Vars
    var boardParams = getUrlVars()["boards"].split(",");
    var validBoards = [];
    // Get vars from table
    $("th.board").each(function(){
        validBoards.push($(this).data("board"));
    });
    $.each(boardParams, function(index, value){
        if($.inArray(value, validBoards)){
            var boardSelector = "[data-board='" + value + "']";
            console.log(boardSelector);
            $(boardSelector).css("display","table-cell");
        }
    });
});

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

$(window).on("scroll", function(){
    if(isOverflown($("#compare-table"))){
        $(".double-scroll").doubleScroll();
    }
});
