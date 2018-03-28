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
            var songId = (routeTo.params.songId) -1;
            // var s = "s";
            // var s_id = s.concat(songId);
            setTimeout(function() {
                Framework7.request.json('sl', function(data) {
                    console.log(data);
                    title = data[songId].title;
                    song = data[songId].full_song;
                    number = data[songId].number;
                    foot_notes = data[songId].foot_notes;
                    ori_songname = data[songId].ori_songname;
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
                            foot_notes: foot_notes,
                            ori_songname: data[songId].ori_songname
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