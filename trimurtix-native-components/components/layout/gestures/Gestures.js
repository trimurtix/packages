import { Native } from 'meteor/trimurtix:native';

// Extend Global Object
Native.components.Gestures = Gestures || {};

Gestures = {
  open() {

    this.template = Template.Gestures;
    this.view = Blaze.currentView;

  }
};
