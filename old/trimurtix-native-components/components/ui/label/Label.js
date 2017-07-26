import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Label.html';

Native.components.Label = Label || {};

Label = {
  render() {

    this.template = Template.Label;
    this.view = Blaze.currentView;

  }
}

Template.Label.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Label.render();
});
