import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './DatePicker.html';

// Extend Global Object
Native.components.DatePicker = DatePicker || {};

DatePicker = {
  open() {

    this.template = Template.DatePicker;
    this.view = Blaze.currentView;

  }
};

Template.DatePicker.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  DatePicker.open();
});
