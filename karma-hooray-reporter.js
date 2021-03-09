var HoorayReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
    var log = logger.create('reporter.horray');

    baseReporterDecorator(this);

    this.adapters = [function(msg) {
        process.stdout.write.bind(process.stdout)(msg + "\r\n");
    }];

    this.onRunStart = function(browsers) {
        this.write("Run started, hooray!");
    };

    this.onBrowserStart = function(browser) {
        this.write("Browser started, hooray!");
    };

    this.specSuccess = function(browser, result) {
        
    }

    this.specFailure = function(browser, result) {
        this.write("Spec failed, boo!");
    };

    this.onSpecComplete = function(browser, result) {
        if (result.skipped) {
            this.write("Spec skipped, hooray!");
        } else if (result.success) {
            this.write("Spec success, hooray!");
        } else {
            this.write("Spec failed, boo!");
        }

        this.write(result.description);
    }

    this.onRunComplete = function(browsersCollection, results) {
        this.write("Run complete, hooray!");
    };
};

HoorayReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

module.exports = {
    'reporter:hooray': ['type', HoorayReporter]
};