$(window).on('load', function () {
    // Enabled all tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // Insantiate the attribute multiselect
    $("#compare-96boards-attribute-select").multiselect({
        nonSelectedText: 'Select Attributes',
        includeSelectAllOption: true,
        nSelectedText: ' attributes selected',
        allSelectedText: 'All Attributes',
        selectAllText: 'Show all attributes',
        onSelectAll: function () {
            $("[data-attr]").each(function () {
                $(this).css("display", "table-cell");
            });
        },
        onDeselectAll: function () {
            $("[data-attr]").each(function () {
                $(this).css("display", "none");
            });
        },
        onChange: function (option, checked, select) {
            if (checked == true) {
                $("[data-attr='" + $(option).val() + "'").css("display", "table-cell");
            }
            else {
                $("[data-attr='" + $(option).val() + "'").css("display", "none");
            }
        }
    });
    $("#compare-96boards-attribute-select").multiselect('selectAll', false);
    $('#compare-96boards-attribute-select').multiselect('updateButtonText', "All Attributes");
    $("[data-attr]").each(function () {
        $(this).css("display", "table-cell");
    });
    // Enabled the multiselect plugin
    $("#compare-96boards-select").multiselect({
        nonSelectedText: 'Select 96Boards',
        includeSelectAllOption: true,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        nSelectedText: ' boards selected',
        allSelectedText: 'All 96Boards',
        selectAllText: 'Compare all 96Boards',
        onSelectAll: function () {
            $(".double-scroll").doubleScroll({
                resetOnWindowResize: true,
                onlyIfScroll: false
            });
            $("[data-board]").each(function () {
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
            if(checked == true){
                $("[data-board='" + $(option).val() + "'").css("display", "table-cell");
            }
            else{
                $("[data-board='" + $(option).val() + "'").css("display", "none");
            }
            $(".double-scroll").doubleScroll({
                resetOnWindowResize: true,
                onlyIfScroll: true
            });
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
    // Pop board off the table with x icon in th
    $("i.fa.fa-times.removeAttribute").on("click",function(){
        var attributeSelector = "[data-attr='" + $(this).parent().data("attr") + "']";
        $(attributeSelector).css("display", "none");
        $("#compare-96boards-attribute-select").multiselect('deselect', $(this).parent().data("attr"));
    });
    // Check to see if there are in boards in GET params
    if (typeof getUrlVars()["boards"] === 'undefined'){
        // If not then select all boards
        $("#compare-96boards-select").multiselect('selectAll', false);
        $('#compare-96boards-select').multiselect('updateButtonText', "All 96Boards");
        $("[data-board]").each(function () {
            $(this).css("display", "table-cell");
        });
    }
    else {
        // Hide all attr
        $("[data-attr]").each(function () {
            $(this).css("display", "none");
        });
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
                // Make Attributes visible for selected boards
                $(boardSelector + "[data-attr]").each(function () {
                    $(this).css("display", "table-cell");
                });
                // Display attr headings
                $(".attr-heading").each(function () {
                    $(this).css("display", "table-cell");
                });
            }
            else {
                console.log(value + " is not in the valid Boards array");
                console.log(validBoards);
            }
        });
    }
    // Enable double scroll bars on table
    $(".double-scroll").doubleScroll({
        resetOnWindowResize: true,
        onlyIfScroll: true
    });
});
