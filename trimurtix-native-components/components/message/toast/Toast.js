import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Toast.html';

// Extend Global Object
Native.components.Toast = Toast || {};

Toast = {
  open() {

    this.template = Template.Toast;
    this.view = Blaze.currentView;

  }
};

Template.Toast.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Toast.open();
});
