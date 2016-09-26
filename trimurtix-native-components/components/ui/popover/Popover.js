import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Popover.html';

Native.components.Popover = Popover || {};

Popover = {
  render() {

    this.template = Template.Popover;
    this.view = Blaze.currentView;

  }
}

Template.Popover.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Popover.render();
});
