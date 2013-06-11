Package.describe({
    summary: "Reddit API wrapper packaged for meteor."
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/reddit.js'
    ], 'server'
    );

});
Npm.depends({"handson-reddit":"0.0.0"});