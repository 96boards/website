$(window).on('load', function () {
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
    var params = getUrlVars();
    var validBoards = [];
    // Get vars from table
    $("th.board").each(function(){
        validBoards.push($(this).data("board"));
    });
    console.log(validBoards);
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    if($("#compare-table").length > 0){
        $('.pane-hScroll').scroll(function () {
            $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
        });
    } 
});
