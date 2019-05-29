// Store the Members JSON data
var membersJSONData = [];
// This file is required to retreive the 96Boards member details from Linaro.org
$(document).ready(function(){
    // Get the members JSON
    $.ajax({
        url: "https://www.linaro.org/assets/json/members.json",
        dataType: 'json',
        complete: function (jsonResponse) {
            jsonData = JSON.parse(jsonResponse.responseText);
            membersJSONData = membersJSONData.concat(jsonData);
        }
    });
});
// This functions adds the members to a the selector element
function addMembers(membersData, membersKey, selector){

    // Required members data
    var requiredMembers = [];
    // Get required members
    for(i=0;i<membersData.length;i++){
        if(membersData[i]["id"] === membersKey){
            requiredMembers = membersData[i];
        }
    }
    var elements = "";
    // Loop through the members
    for(i=0;i<requiredMembers["members"].length;i++){
        // Create new element based on current member index in loop
        var memberElement = '<div class="col-md-3 col-sm-4 col-xs-6">';
        memberElement += '<a href="https://www.linaro.org' + requiredMembers["members"][i].url + '" target="_blank">';
        memberElement += '<img data-src="' + requiredMembers["members"][i].image + '" alt="' + requiredMembers["members"][i].name + '"';
        memberElement += 'src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="img-responsive members-img center-block lazyload"/>';
        memberElement += '</a></div>';
        // Append to elements
        elements += memberElement;
    }
    $(selector).html(elements);
    console.log(membersKey +": " + elements);
}
// Wait for AJAX request to stop
$(document).ajaxStop(function () {
    console.log(membersJSONData);
    addMembers(membersJSONData, "boards-sc", "#boards-sc");
    addMembers(membersJSONData, "boards-partners", "#boards-mezzanine");
    addMembers(membersJSONData, "boards-mp", "#boards-mp");
});