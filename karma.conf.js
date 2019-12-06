// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/godel-github-io'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['HeadlessChrome'],
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 3,
        customLaunchers: {
            HeadlessChrome: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox',
                    '--disable-web-security',
                    '--disable-gpu',
                    '--no-proxy-server'
                ]
            }
        },
        captureTimeout: 300000,
        browserNoActivityTimeout: 300000,
        singleRun: true
    });
};
