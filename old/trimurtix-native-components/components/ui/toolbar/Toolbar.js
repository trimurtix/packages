import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Toolbar.html';

Native.components.Toolbar = Toolbar || {};

Toolbar = {
  render() {

    this.template = Template.Toolbar;
    this.view = Blaze.currentView;

  }
}

Template.Toolbar.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Toolbar.render();
});
