// Karma configuration
// Generated on Thu May 25 2017 14:03:03 GMT-0400 (EDT)

const env = { test: true }
const webpackConfig = require('./webpack.config')(env)
const testGlob = 'src/**/*.test.js'
const srcGlob = 'src/**/*.ts'
const vendorFile = 'src/vendor.ts'

process.env.BABEL_ENV = 'test'

module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      vendorFile,
      testGlob,
      srcGlob
    ],
    preprocessors: {
      [vendorFile]: ['webpack'],
      [testGlob]: ['webpack'],
      [srcGlob]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress', 'coverage'],
    coverageReporter:{
      reporters: [
        {
          type: 'lcov', dir:'coverage/', subdir: '.'
        },
        {
          type: 'json', dir:'coverage/', subdir: '.'
        },
        {
          type: 'text-summary'
        }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
