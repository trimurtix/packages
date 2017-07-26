import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Radio.html';

// Extend Global Object
Native.components.Radio = Radio || {};

Radio = {
  open() {

    this.template = Template.Radio;
    this.view = Blaze.currentView;

  }
};

Template.Radio.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Radio.open();
});
