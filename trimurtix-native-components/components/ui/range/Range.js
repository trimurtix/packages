import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Range.html';

Native.components.Range = Range || {};

Range = {
  render() {

    this.template = Template.Range;
    this.view = Blaze.currentView;

  }
}

Template.Range.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Range.render();
});
