import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Select.html';

// Extend Global Object
Native.components.Select = Select || {};

Select = {
  open() {

    this.template = Template.Select;
    this.view = Blaze.currentView;

  }
};

Template.Select.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Select.open();
});
