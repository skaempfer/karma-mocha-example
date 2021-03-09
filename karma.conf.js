module.exports = function (config) {
  config.set({
    frameworks: [ "mocha", "chai", "karma-typescript" ],
    files: [
      { pattern: "src/**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    karmaTypescriptConfig: {
        tsconfig: "./tsconfig.json",
    },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      "ChromeHeadless",
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
