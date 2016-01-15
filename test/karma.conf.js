module.exports = function(config){
  config.set({
    captureConsole: true,

    files : [
      '../journey-condition-parser.js',
      '*_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    reports: ['dots']
  });
};
