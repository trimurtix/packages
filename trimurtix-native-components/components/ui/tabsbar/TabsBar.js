import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './TabsBar.html';

Native.components.TabsBar = TabsBar || {};

TabsBar = {
  render() {

    this.template = Template.TabsBar;
    this.view = Blaze.currentView;

  }
}

Template.TabsBar.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  TabsBar.render();
});
