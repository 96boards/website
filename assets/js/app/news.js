// News source
sources = [
    "https://www.linaro.org/assets/json/news.json",
]
allJSONData = []
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
function formatDate(timestamp) {
    date = new Date(timestamp);
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var date_formatted = day + ' ' + monthNames[monthIndex] + ' ' + year;
    return date_formatted;
}
function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0];
}
var related_posts = [];
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNews(selector, results_data, number_of_items) {
    console.log(results_data);
    var listItems = '';
    for (var i = 0; i < number_of_items; i++) {
        post = results_data[i];
        listItems += '<a href="' + post.url + '" class="list-group-item">';
        listItems += '<h3 class="official-news-title">' + post.title + '</h3>';
        listItems += '<span class="date">' + formatDate(Date.parse(extractDateString(post.date_published))) + '</span>';
        listItems += '</a>';
    }
    $(selector).html(listItems);
}
function checkArrayForKeyword(array, keyword){
    for(i=0;i<array.length;i++){
        var search_item = array[i].toLowerCase();
        console.log(keyword + " vs " + search_item);
        if (search_item.indexOf(keyword) !== -1){
            return true;
        }
    }
    return false;
}
$(document).ready(function(){
    // Check to see if the div we are adding to exists
    if ($("#boards-news").length > 0 || $("#boards-news-blog").length > 0) {
        $.ajax({
            url: "https://www.linaro.org/assets/json/posts.json",
            dataType: 'json',
            complete: function (jsonResponse) {
                jsonData = JSON.parse(jsonResponse.responseText);
                // Find the corresponding key in the JSON data 
                console.log(jsonData);
                $.each(jsonData, function (idx, obj) {
                    console.log(obj);
                    var post_tags = obj.tags;
                    var post_title = obj.title.toLowerCase();
                    var in_keywords = checkArrayForKeyword(obj, "96boards");
                    if (in_keywords === true){
                        related_posts.push(obj);
                    }
                    else if (post_title.indexOf("96boards") !== -1){
                        related_posts.push(obj);
                    }
                });
            }
        });
    }
    else {
        console.log("Not defined!");
    }    
});
// Wait for all ajax requests to stop
$(document).ajaxStop(function () {
    if ($("#boards-news").length > 0) {
        var sorted_data = related_posts.sort(sort_by_date);
        addLatestNews("#boards-news", sorted_data, 10);
    }
    if ($("#boards-news-blog").length > 0) {
        var sorted_data = related_posts.sort(sort_by_date);
        addLatestNews("#boards-news-blog",sorted_data, 5);
    }
});