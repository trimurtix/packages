import { Session } from 'meteor/meteor';
import { Native } from 'meteor/trimurtix:native';

Native.lib.platform = {
  web() {
    return 'web';
  },
  iOS() {
    return (!!navigator.userAgent.match(/iPad/i)
           || !!navigator.userAgent.match(/iPhone/i)
           || !!navigator.userAgent.match(/iPod/i))
           || Session.get('platformOverride') === 'iOS';
  },
  android() {
    return navigator.userAgent.indexOf('Android') > 0
           || Session.get('platformOverride') === 'android';
  }
}
