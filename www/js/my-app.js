// Initialize app
// Dom7
var $ = Dom7;

// Theme
var theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    name: 'Booked',
    version: '1.0',
    theme: theme,
    dialog: {
        title: 'Booked',
    },
    statusbar: {
        iosOverlaysWebview: true,
        
    },
    data: function() {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    },
    methods: {
        helloWorld: function() {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    vi: {
        placementId: 'pltd4o7ibb9rc653x14',
    },
});


// Handle Cordova Device Ready Event
$(document).on('deviceready', function() {
    console.log("Device is ready!");
    songlist();
});

function songlist() {
    $("#bu").on("click", function() {

        alert("fewg");
        // $.getJSON("../test.json", function(obj) {
        //       console.log( "success" );
        //     $.each(obj, function(key, value) {
        //         // alert(value.title);
        //         $("#song_list").append('<li class="item-content">' +   value.title +  '</li>');
        //     });
        // });
        
    });
}

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):


// Option 2. Using one 'pageInit' event handler for all pages:
$(document).on('pageInit', function(e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        app.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$(document).on('pageInit', '.page[data-page="about"]', function(e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    app.alert('Here comes About page');
})