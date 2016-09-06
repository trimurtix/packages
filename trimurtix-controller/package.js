// Trimurtix Controller
Package.describe({
  name: 'trimurtix:controller',
  version: '0.1.0',
  summary: 'Trimurtix Controller Application - Blaze',
  git: 'https://github.com/trimurtix/packages/trimurtix-controller',
  documentation: 'README.md'
});


// Package Config
Package.onUse(function(api) {

  configure(api);

});

// Tests
Package.onTest(function(api) {

  var packages = [
    'tinytest',
    'underscore',
    'templating',
    'fourseven:scss@3.4.1',
    'trimurtix:controller'
  ];

  // Test packages
  api.use(packages);

  // Test package
  api.addFiles('controller-tests.js', 'client');

});

// API Configure
function configure(api){

  // Meteor Version @ 1.3.1
  api.versionsFrom('1.3.1');

  var packages = [
    'underscore',
    'templating'
  ];

  var both = [
    'client',
    'server'
  ];

  // API Exports
  api.export('Trimurtix', both);

  // Trimurtix Package File
  api.addFiles('controller.js', both);

  // API Use
  api.use(packages, both);

}
