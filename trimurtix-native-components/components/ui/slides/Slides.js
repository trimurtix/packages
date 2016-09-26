import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Slides.html';

Native.components.Slides = Slides || {};

Slides = {
  render() {

    this.template = Template.Slides;
    this.view = Blaze.currentView;

  }
}

Template.Slides.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Slides.render();
});
