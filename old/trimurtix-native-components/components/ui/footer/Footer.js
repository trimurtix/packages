import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Footer.html';

Native.components.Footer = Footer || {};

Footer = {
  render() {

    this.template = Template.Footer;
    this.view = Blaze.currentView;

  }
}

Template.Footer.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Footer.render();
});
