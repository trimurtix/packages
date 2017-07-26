import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './ListView.html';

Native.components.ListView = ListView || {};

ListView = {
  render() {

    this.template = Template.ListView;
    this.view = Blaze.currentView;

  }
}

Template.ListView.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  console.log(this.state);
  console.log(this.instance);
  ListView.render();
});
