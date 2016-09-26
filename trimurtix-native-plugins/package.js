Package.describe({
  name: 'trimurtix:native-plugins',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.4.1');

  api.mainModule('native-plugins.js');

  api.use([
    'ecmascript'
  ]);

  api.addFiles([
    'plugins/native-splashscreen/native-splashscreen.js',
  ], 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('trimurtix:native-plugins');
  api.mainModule('native-plugins-tests.js');
});
