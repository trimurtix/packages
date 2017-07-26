import { Native } from 'meteor/trimurtix:native';

// Components
Native.components = {
  init() {
    if (!Package['trimurtix:native-components']) {
      console.log("Error: It is necessary to install the package 'trimurtix:native-components.'");
      if (Meteor.isServer) {
          process.exit(8192);
      }
    }
  },
};
