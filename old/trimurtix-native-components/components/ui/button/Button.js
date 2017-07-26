import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Button.html';

Native.components.Button = Button || {};

Button = {
  render() {

    this.template = Template.Button;
    this.view = Blaze.currentView;

  }
}

Template.Button.onCreated(function () {

  this.state = new ReactiveVar();
  this.instance = Template.instance();

  state = this.state;
  instance = this.instance;

  console.log(state);
  console.log(instance);

  Button.render();

});

Template.Button.helpers({
	items: [
    	{ name: "foo", pet: "dog" },
    	{ name: "bar", pet: "cat" }
  	]
});
