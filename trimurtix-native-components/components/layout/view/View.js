import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './View.html';

// Extend Global Object
Native.components.View = View || {};

View = {
  open() {

    this.template = Template.View;
    this.view = Blaze.currentView;

  }
};

Template.View.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  View.open();
});
