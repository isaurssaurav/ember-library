import Ember from 'ember';

export default Ember.Component.extend({
 actions: {
   buttonClicked(param) {
     this.sendAction('action', param);
   }
 }
});
