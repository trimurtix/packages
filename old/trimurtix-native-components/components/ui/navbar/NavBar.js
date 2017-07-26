import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './NavBar.html';

Native.components.NavBar = NavBar || {};

NavBar = {
  render() {

    this.template = Template.NavBar;
    this.view = Blaze.currentView;

  }
}

Template.NavBar.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  NavBar.render();
});
