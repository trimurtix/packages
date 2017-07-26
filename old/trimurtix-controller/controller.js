/**
* Trimurtix Controller 
* An User interface controllers your application Meteor
*
*/

/**
*
** @core Create Object
*
**/

Trimurtix = {};
Meteor.Trimurtix = Trimurtix || {};

/**
*
** Trimurtix Controller
** Takes a template name and actions object to delegate to each of Meteor's
** template methods. Acessible on the client as Trimurtix.Controller('templateName', {});
*
* @use
* Trimurtix.Controller('templateName', {
*   created: function() {
*     // Logic to run when your template is created.
*   },
*   rendered: function() {
*     // Logic to run when your template is rendered.
*   },
*   destroyed: function() {
*     // Logic to run when your template is destroyed.
*   },
*   helpers: {
*     exampleHelper: function() {
*       // Example helper logic.
*     }
*   },
*   events: {
*     'click .thing': function( element, template ) {
*       // Logic to run when .thing is clicked.
*     }
*   }
* });
*
**/

Trimurtix.Controller = function( template, actions ) {
  for ( var action in actions ) {
    _delegateMethod( template, action, actions[action] );
  }
};

var _delegateMethod = function( template, actionName, actionContent ) {
  var templateMethod = _convertActionToTemplateMethod[actionName];
  if ( templateMethod ) {
    Template[template][templateMethod]( actionContent );
  } else {
    _throwError( 'Sorry, "' + actionName + '" is not a supported method.' );
  }
};

var _convertActionToTemplateMethod = {
  created: 'onCreated',
  rendered: 'onRendered',
  destroyed: 'onDestroyed',
  helpers: 'helpers',
  events: 'events'
};

var _throwError = console.error.bind( console, '[trimurtix:controller]:' );
