// News source
sources = [
    "https://staging.linaro.org/assets/json/news.json",
]

allJSONData = []
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}

// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNews(results_data, number_of_items) {
    console.log(results_data);
    var listItems = '';
    for (var i = 0; i < number_of_items; i++) {
        post = results_data[i];
        listItems += '<a href="' + post.url + '" class="list-group-item">';
        listItems += '<h3>' + post.title + '</h3>';
        listItems += '</a>';
    }
    $("#boards-news").html(listItems);
}

$(document).ready(function(){
    // Check to see if the div we are adding to exists
    if ($("#boards-news").length > 0) {
        $.ajax({
            url: "https://staging.linaro.org/assets/json/news.json",
            dataType: 'json',
            complete: function (jsonResponse) {
                jsonData = JSON.parse(jsonResponse.responseText);
                // Find the corresponding key in the JSON data 
                console.log(jsonData);
                // $.each(jsonData, function (idx, obj) {
                // // Get the current Connect code
                // });
            }
        });
    }
    else {
        console.log("Not defined!");
    }    
});