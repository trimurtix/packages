import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Card.html';

Native.components.Card = Card || {};

Card = {
  render() {

    this.template = Template.Card;
    this.view = Blaze.currentView;

  }
}

Template.Card.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Card.render();
});
