
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

$(window).on('load', function () {
    // Enabled all tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // Check if table is overflown
    if (isOverflown(document.getElementById("compare-table"))) {
        $(".double-scroll").doubleScroll();
    }
    // Enabled the multiselect plugin
    $("#compare-96boards-select").multiselect({
        nonSelectedText: 'Select 96Boards',
        includeSelectAllOption: true,
        enableFiltering: true,
        nSelectedText: ' boards selected',
        allSelectedText: 'All 96Boards',
        selectAllText: 'Compare all 96Boards',
        onSelectAll: function () {
            $("[data-board]").each(function(){
                $(this).css("display", "table-cell");
            });
        },
        onDeselectAll: function () {
            $("[data-board]").each(function(){
                $(this).css("display", "none");
            });
        },
        enableCollapsibleOptGroups: true,
        onChange: function (option, checked, select) {
            if (isOverflown(document.getElementById("compare-table"))) {
                $(".double-scroll").doubleScroll();
            }
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
    // Pop board off the table with x icon in th
    $("i.fa.fa-times").on("click",function(){
        var boardSelector = "[data-board='" + $(this).parent().data("board") + "']";
        $(boardSelector).css("display", "none");
        $("#compare-96boards-select").multiselect('deselect', $(this).parent().data("board"));
    });
    // Check to see if there are in boards in GET params
    if (typeof getUrlVars()["boards"] === 'undefined'){
        // If not then select all boards
        $("#compare-96boards-select").multiselect('selectAll', true);
    }
    else {
        // parse the boards param and display boards
        var boardParams = getUrlVars()["boards"].split(",");
        var validBoards = [];
        // Get vars from table
        $("th.board").each(function () {
            validBoards.push($(this).data("board"));
        });
        $.each(boardParams, function (index, value) {
            console.log(value);
            if ($.inArray(value, validBoards) > -1) {
                // Select the relevant options in the Boostrap Multiselect
                $("#compare-96boards-select").multiselect('select', value);
                // Get the data-board selector
                var boardSelector = "[data-board='" + value + "']";
                console.log(boardSelector);
                // Toggle cells based on the board selector from display:none; to display:table-cell;
                $(boardSelector).css("display", "table-cell");
            }
            else {
                console.log(value + " is not in the valid Boards array");
                console.log(validBoards);
            }
        });
    }
});

$(window).on("scroll", function(){
    if(isOverflown(document.getElementById("compare-table"))){
        $(".double-scroll").doubleScroll();
    }
});
