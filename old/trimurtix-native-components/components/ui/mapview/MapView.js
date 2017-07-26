import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './MapView.html';

Native.components.MapView = MapView || {};

MapView = {
  render() {

    this.template = Template.MapView;
    this.view = Blaze.currentView;

  }
}

Template.MapView.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  MapView.render();
});
