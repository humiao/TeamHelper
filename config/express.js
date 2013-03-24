var path = require('path');

module.exports = function (app, express) {
    app.configure(function () {
        app.set('port', process.env.PORT || 3000);
        app.set('views', path.normalize(__dirname + '/../views'));

        app.engine('jshtml', require('jshtml-express'));
        app.set('view engine', 'jshtml');
        //app.set('view engine', 'jade');

        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(path.normalize(__dirname + '/../public')));
    });

    //Development
    app.configure('development', function () {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    //Production
    app.configure('production', function () {
        app.use(express.errorHandler());
    });
};