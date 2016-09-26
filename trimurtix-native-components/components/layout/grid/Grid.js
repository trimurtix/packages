import { Native } from 'meteor/trimurtix:native';

// Extend Global Object
Native.components.Grid = Grid || {};

Grid = {
  open() {

    this.template = Template.Grid;
    this.view = Blaze.currentView;

  }
};
