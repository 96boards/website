// News source
sources = [
    "https://www.linaro.org/assets/json/news.json",
]

allJSONData = []
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}

// This function handles the jsonp data we receive
function func(jsonData) {
    if (counter == (sources.length - 1)) {
        allJSONData = allJSONData.concat(jsonData);
        var sorted_data = allJSONData.sort(sort_by_date_desc);
        addLatestNews(sorted_data, sorted_data.length);
        allJSONData = sorted_data;
        currentJSON = sorted_data;
        // Add the filters based on JSON Data
        // addFilters(allJSONData);
        // Add the size of the results
        // $('#size').html(sorted_data.length);
        // Run function on each keyup event triggered by the search input
    }
    else {
        allJSONData = allJSONData.concat(jsonData);
        counter += 1;
    }
}


// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNews(results_data, number_of_items) {
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
        // Loop through the sources and the separate script elements.
        for (i = 0; i < sources.length; i++) {
            // Adds a list element for each result in the JSONP data
            // JSONP url
            var jsonp_url = sources[i];
            // Add the JSONP to a script element
            // Create a new script element and set the type and src
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = jsonp_url;
            // Append the new script element to the head.
            $("head").append(script);
            // Monitor for the keyup event with a 1 second delay.
        }
    }
    else {
        console.log("Not defined!");
    }    
});