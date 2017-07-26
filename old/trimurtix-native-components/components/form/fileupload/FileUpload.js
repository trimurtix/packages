import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './FileUpload.html';

// Extend Global Object
Native.components.FileUpload = FileUpload || {};

FileUpload = {
  open() {

    this.template = Template.FileUpload;
    this.view = Blaze.currentView;

  }
};

Template.FileUpload.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  FileUpload.open();
});
