import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Popup.html';

// Extend Global Object
Native.components.Popup = Popup || {};

Popup = {
  open() {

    this.template = Template.Popup;
    this.view = Blaze.currentView;

  }
};

Template.Popup.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Popup.open();
});
