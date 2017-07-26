import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Tabs.html';

Native.components.Tabs = Tabs || {};

Tabs = {
  render() {

    this.template = Template.Tabs;
    this.view = Blaze.currentView;

  }
}

Template.Tabs.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Tabs.render();
});
