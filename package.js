Package.describe({
    summary: "Reddit API wrapper redwrap packaged for meteor."
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/reddit.js'
    ], 'server'
    );

});
Npm.depends({"redwrap":"0.0.4"});