// Object to work with API
// Credit goes to: https://github.com/nukeador/discourse-api-js/

function DiscourseApi(url) {
    this.url = url;
}

DiscourseApi.prototype.category = function (id, cb) {
    var object = new XMLHttpRequest();
    object.open("GET", this.url + '/c/' + id + '.json');
    object.onreadystatechange = function() {
        if (object.readyState === 4 && object.status === 200) {
            cb(JSON.parse(object.responseText));
        }
    };
    object.send();
};

DiscourseApi.prototype.topic = function (id, cb) {
    var object = new XMLHttpRequest();
    object.open("GET", this.url + '/t/' + id + '.json');
    object.onreadystatechange = function() {
        if (object.readyState === 4 && object.status === 200) {
            cb(JSON.parse(object.responseText));
        }
    };
    object.send();
};