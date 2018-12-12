$(document).ready(function(){
    var options =
        {
        scriptUrl: '//96boards.disqus.com/embed.js',
        /*
            @type: string (url)
            @default: none
            @required
            URL of Disqus' executive JS file. The value is memorized on the first function call
            and ignored otherwise because Disqus allows only one instance per page at the time.
        */

        laziness: 1,
        /*
            @type: int (>=0)
            @default: 1
            Sets the laziness of loading the widget: (viewport height) * laziness . For example:
            0 - widget load starts when at the least a tiny part of it gets in the viewport;
            1 - widget load starts when the distance between the widget zone and the viewport is no more than the height of the viewport;
            2 - 2x viewports, etc.
        */

        throttle: 250,
        /*
            @type: int (milliseconds)
            @default: 250
            Defines how often the plugin should make calculations during the
            processes such as resize of a browser's window or viewport scroll.
            250 = 4 times in a second.
        */

        /*
            @type: function
            @default: none
            Disqus-native options. Check Disqus' manual for more information.
        */
        disqusConfig: function()
        {
            this.page.title       = '96Boards Blog';
            this.page.url         = '/blog/';
            this.page.identifier  = 'Blog';
        }
        };
    // jQuery
    $.disqusLoader( '.disqus', options);
});