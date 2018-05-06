Package.describe({
  summary: 'Minifier for Meteor with PostCSS processing - use Autoprefixer and others with ease',
  version: '2.0.2',
  name: 'juliancwirkopostcss',
  git: 'https://github.com/juliancwirko/meteor-postcss.git'
});

Package.registerBuildPlugin({
  name: 'minifier-postcss',
  use: [
    'ecmascript@0.10.4',
    'minifier-css@1.3.1',
    'tmeasday:check-npm-versions@0.3.2'
  ],
  npmDependencies: {
    'source-map': '0.5.6'
  },
  sources: [
    'plugin/minify-css.js'
  ]
});

Package.onUse(function (api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function (api) {

});
