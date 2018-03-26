var routes = [
    // Index page
    {
        path: '/',
        url: './index.html',
        name: 'home',
    },
    {
        path: '/about/',
        url: './about.html',
        name: 'about',
    },
    {
        path: '/settings/',
        componentUrl: './settings.html',
        name: 'settings',
    },
    {
        path: '/song/:songId/',
        async: function(routeTo, routeFrom, resolve, reject) {
            var router = this;
            var app = router.app;
            var title, song, number;
            var songId = (routeTo.params.songId) ;
            var s = "s";
            var s_id = s.concat(songId);
            setTimeout(function() {
                Framework7.request.json('sl', function(data) {
                    console.log(data);
                    title = data[""+s_id+""].title;
                    song = data[""+s_id+""].full_song;
                    number = data[""+s_id+""].number;
                    // console.log(data.s1.number);

                    // console.log(user.songs[songId].title);
                    // Hide Preloader
                    // app.preloader.hide();

                    // Resolve route to load page
                    resolve({
                        componentUrl: './song.html',
                    }, {
                        context: {
                            song: song,
                            title: title,
                            number: number,
                        }
                    });
                });
            }, 0);
        },
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },
];