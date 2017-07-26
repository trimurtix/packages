import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Item.html';

Native.components.Item = Item || {};

Item = {
  render() {

    this.template = Template.Item;
    this.view = Blaze.currentView;

  }
}

Template.Item.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Item.render();
});
