import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './ImageView.html';

Native.components.ImageView = ImageView || {};

ImageView = {
  render() {

    this.template = Template.ImageView;
    this.view = Blaze.currentView;

  }
}

Template.ImageView.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  ImageView.render();
});
