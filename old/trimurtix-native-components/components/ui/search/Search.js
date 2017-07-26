import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Search.html';

Native.components.Search = Search || {};

Search = {
  render() {

    this.template = Template.Search;
    this.view = Blaze.currentView;

  }
}

Template.Search.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  Search.render();
});
