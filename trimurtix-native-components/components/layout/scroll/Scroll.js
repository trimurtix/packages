import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Scroll.html';

// Extend Global Object
Native.components.Scroll = Scroll || {};

Scroll = {
  open() {

    this.template = Template.Scroll;
    this.view = Blaze.currentView;

  }
};

Template.Scroll.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Scroll.open();
});
