let Blog = Backbone.Model.extend({
    defaults: {
        author: '',
        title: '',
        url: ''
    }
});

let BlogsCollection = Backbone.Collection.extend({
   model: Blog
});

let BlogView = Backbone.View.extend({
    model: new Blog(),
    tagName: 'tr',
    initialize: function () {
        this.template = _.template($(''))
    }
});
let BlogsView = Backbone.View.extend({

});

$(document).ready(function () {
    let blog1 = new Blog({
        author: 'Michael',
        title: 'Michael\'s Blog',
        url: 'http://michaelsblog.com'
    });
    let blog2 = new Blog({
        author: 'Susan',
        title: 'Susan\'s Blog',
        url: 'http://susansblog.com'
    })
});