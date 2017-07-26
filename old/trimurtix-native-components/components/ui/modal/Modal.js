import { Template } from 'meteor/templating';
import { Native } from 'meteor/trimurtix:native';

import './Modal.html';

Native.components.Modal = Modal || {};

Modal = {
  open() {

    this.template = Template.Modal;
    this.view = Blaze.currentView;

  },
  close() {
    //console.log('Fechar');
  }
}

Template.Modal.onCreated(function () {
  this.state = new ReactiveVar();
  this.instance = Template.instance();
  Modal.open();
});
