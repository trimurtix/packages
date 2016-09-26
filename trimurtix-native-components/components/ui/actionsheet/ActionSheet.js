import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './ActionSheet.html';

// Extend Global Object
Native.components.ActionSheet = ActionSheet || {};

ActionSheet = {
  open() {

    this.template = Template.ActionSheet;
    this.view = Blaze.currentView;

  }
};

Template.ActionSheet.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  ActionSheet.open();
});
