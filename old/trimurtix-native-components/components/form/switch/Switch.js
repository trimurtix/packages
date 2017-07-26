import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Switch.html';

// Extend Global Object
Native.components.Switch = Switch || {};

Switch = {
  open() {

    this.template = Template.Switch;
    this.view = Blaze.currentView;

  }
};

Template.Switch.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Switch.open();
});
