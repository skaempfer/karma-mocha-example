module.exports = function (config) {
  config.set({
    //frameworks: [ "mocha", "karma-typescript" ],
    frameworks: [ "jasmine", "karma-typescript" ],
    files: [
      { pattern: "src/**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    karmaTypescriptConfig: {
        tsconfig: "./tsconfig.json",
    },
    reporters: ["mocha", "hooray"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      "ChromeHeadless",
    ],
    plugins: [
      "karma-chrome-launcher",
      //"karma-mocha",
      "karma-jasmine",
      "karma-mocha-reporter",
      "karma-typescript",
      require("./karma-hooray-reporter")
    ],
    customLaunchers: {
      "ChromeHeadless": {
        base: "Chrome",
        flags: [
          "--no-sandbox",
          "--headless",
          "--disable-gpu",
          "--remote-debugging-port=9222"
        ]
      }
    },
    singleRun: true
  })
}
