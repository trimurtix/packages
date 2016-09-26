// Trimurtix CRUD
Package.describe({
  name: 'trimurtix:crud',
  version: '0.0.6',
  summary: 'Meteor Methods CRUD (Insert, Update and Remove)',
  git: 'https://github.com/trimurtix/packages/trimurtix-crud',
  documentation: 'README.md'
});

// Package onUse
Package.onUse(function(api) {

  configure(api);

});

// Package Configura
function configure(api){

  // Meteor Version @ 1.3.1
  api.versionsFrom('1.3.1');

  // Test API Use
  api.use([
    'mongo',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.9.0'
  ]);

  // Main Module
  api.mainModule('crud.js');

  // Add API Files
  api.addFiles([
    'server/trimurtix__msgFeedBack.js',
    'server/trimurtix__msgException.js',
    'server/trimurtix__crud.js'
  ], 'server' );

  api.export([
    'Checkout',
    'Help',
    'Orders',
    'Products',
    'Departments',
    'Recipes',
    'Sections',
    'Category',
    'Shops',
    'Users',
  ]);

}

// Package onTest
Package.onTest(function(api) {

  // Test API Use
  api.use([
    'mongo',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.9.0',
    'trimurtix:crud@0.0.4'
  ]);

  // Main Module
  api.mainModule('crud.js');

  // Test API Files
  api.addFiles('crud-tests.js');

});
