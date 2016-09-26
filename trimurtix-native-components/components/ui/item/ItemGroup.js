import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Native } from 'meteor/trimurtix:native';

import './ItemGroup.html';

Native.components.ItemGroup = ItemGroup || {};

ItemGroup = {
  render() {

    this.template = Template.ItemGroup;
    this.view = Blaze.currentView;

  }
}

Template.ItemGroup.onCreated(function () {
  this.state = new ReactiveVar(false);
});
