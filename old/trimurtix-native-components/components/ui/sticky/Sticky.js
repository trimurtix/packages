import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Sticky.html';

Native.components.Sticky = Sticky || {};

Sticky = {
  render() {

    this.template = Template.Sticky;
    this.view = Blaze.currentView;

  }
}

Template.Sticky.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Sticky.render();
});
