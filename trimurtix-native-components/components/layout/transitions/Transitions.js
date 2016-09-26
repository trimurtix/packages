import { Native } from 'meteor/trimurtix:native';

// Extend Global Object
Native.components.Transitions = Transitions || {};

Transitions = {
  open() {

    this.template = Template.Transitions;
    this.view = Blaze.currentView;

  }
};
