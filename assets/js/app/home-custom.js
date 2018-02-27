$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var baseURL = "https://discuss.96boards.org"
var category = 'products/hikey960';
var topic = '4304';

client = new DiscourseApi(baseURL);

client.category(category, function(response) {
    // We need to wait until the remote response is back
    if (response) {
        var content = '<p>Details about the category: ' + category + '</p>\
                    <p>Number of topics retrieved: ' + response.topic_list.topics.length + '</p>\
                    <p>List of topics:</p>\
                    <ul>';

        for (var i = 0; i < response.topic_list.topics.length; i++) {
            var topic = response.topic_list.topics[i];
            var url = baseURL + '/t/' + topic.slug + '/' + topic.id;
            content += '<li><a href="' + url + '">' + topic.title + '</a> (' + topic.created_at + ') ' + topic.posts_count + ' posts - ' + topic.views + ' views - ' + topic.like_count + ' likes </li>';
        };

        content += '</ul><hr />';

        console.log(content);
    }
});