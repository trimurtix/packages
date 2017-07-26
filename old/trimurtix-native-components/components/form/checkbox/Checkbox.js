import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Checkbox.html';

// Extend Global Object
Native.components.Checkbox = Checkbox || {};

Checkbox = {
  open() {

    this.template = Template.Checkbox;
    this.view = Blaze.currentView;

  }
};

Template.Checkbox.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Checkbox.open();
});
