import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Collapse.html';

Native.components.Collapse = Collapse || {};

Collapse = {
  render() {

    this.template = Template.Collapse;
    this.view = Blaze.currentView;

  }
};

Template.Collapse.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Collapse.render();
});
