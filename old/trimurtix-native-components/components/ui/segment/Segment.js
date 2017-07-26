import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Segment.html';

Native.components.Segment = Segment || {};

Segment = {
  render() {

    this.template = Template.Segment;
    this.view = Blaze.currentView;

  }
}

Template.Segment.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Segment.render();
});
