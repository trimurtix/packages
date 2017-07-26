import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Loading.html';

// Extend Global Object
Native.components.Loading = Loading || {};

Loading = {
  open() {

    this.template = Template.Loading;
    this.view = Blaze.currentView;

  }
};

Template.Loading.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Loading.open();
});
