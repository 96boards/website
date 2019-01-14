$(window).load(function(){
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
    // Get vars from table
    $("[data-board*='board']").each(function(){
        console.log($(this).data("board"));
    });

});