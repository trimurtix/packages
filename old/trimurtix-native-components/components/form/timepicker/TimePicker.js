import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './TimePicker.html';

// Extend Global Object
Native.components.TimePicker = TimePicker || {};

TimePicker = {
  open() {

    this.template = Template.TimePicker;
    this.view = Blaze.currentView;

  }
};

Template.TimePicker.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  TimePicker.open();
});
