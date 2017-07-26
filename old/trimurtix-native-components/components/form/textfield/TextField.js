import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './TextField.html';

// Extend Global Object
Native.components.TextField = TextField || {};

TextField = {
  open() {

    this.template = Template.TextField;
    this.view = Blaze.currentView;

  }
};

Template.TextField.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  TextField.open();
});
