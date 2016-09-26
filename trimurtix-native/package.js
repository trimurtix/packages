Package.describe({
  name: 'trimurtix:native',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.4.1');

  api.mainModule('native.js');

  api.use([
    'ecmascript',
    'fourseven:scss@3.10.0',
  ]);

  api.addAssets([
    'theme/utils/variables.scss',

    'theme/platforms/fonts/fonts.android.scss',
    'theme/platforms/fonts/fonts.ios.scss',
    'theme/platforms/fonts/fonts.web.scss',

    'theme/platforms/icons/icons.android.scss',
    'theme/platforms/icons/icons.ios.scss',
    'theme/platforms/icons/custom.icons.scss',

  ], 'client', {isImport: true});

  api.addAssets([

    'theme/app.android.scss',
    'theme/app.ios.scss',
    'theme/app.web.scss',

    'theme/app.core.scss'

  ], 'client');

  api.addFiles([

    'lib/platforms.js',
    'lib/utils.js',

    // 'plugins/cordova.js',
    // 'plugins/web.js'

  ]);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('trimurtix:native');
  api.mainModule('native-tests.js');
});
