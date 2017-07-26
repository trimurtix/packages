import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './SearchBar.html';

Native.components.SearchBar = SearchBar || {};

SearchBar = {
  render() {

    this.template = Template.SearchBar;
    this.view = Blaze.currentView;

  }
}

Template.SearchBar.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  SearchBar.render();
});
