import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Badge.html';

Native.components.Badge = Badge || {};

Badge = {
  render() {

    this.template = Template.Badge;
    this.view = Blaze.currentView;

  }
}

Template.Badge.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Badge.render();
});
