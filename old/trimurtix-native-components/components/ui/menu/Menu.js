import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Menu.html';

Native.components.Menu = Menu || {};

Menu = {}

Template.Menu.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
});
