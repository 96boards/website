$(window).on('load', function () {
    // Enabled the multiselect plugin
    $("#compare-96boards-select").multiselect({
        nonSelectedText: 'Select 96Boards',
        enableCollapsibleOptGroups: true,
        onChange: function (option, checked, select) {
            if(checked == true){
                $("[data-board='" + $(option).val() + "'").css("display", "table-cell");
            }
            else{
                $("[data-board='" + $(option).val() + "'").css("display", "none");
            }
        }
    });
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
        console.log(value);
        if($.inArray(value, validBoards)){
            // Select the relevant options in the Boostrap Multiselect
            $("#compare-96boards-select").multiselect('select', value);
            // Get the data-board selector
            var boardSelector = "[data-board='" + value + "']";
            console.log(boardSelector);
            // Toggle cells based on the board selector from display:none; to display:table-cell;
            $(boardSelector).css("display","table-cell");
        }
        else{
            console.log(value + "is not in the valid Boards array");
            console.log(validBoards);
        }
    });
});

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

$(window).on("scroll", function(){
    if(isOverflown(document.getElementById("compare-table"))){
        $(".double-scroll").doubleScroll();
        console.log("overflow!!!");
    }
    else{
        console.log("not overflown");
    }
});
