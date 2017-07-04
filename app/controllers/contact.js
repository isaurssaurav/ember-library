import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress:'',
  message:'',
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 3), //check a lenth of a message is greater or equals to
  averageValid: Ember.computed.and('isValidMessage', 'isValidEmail'),
  canSubmit: Ember.computed.not('averageValid'),
  actions:{
    sendMessage:function(){
      this.set('responseMessage','Thank you for contacting us, we will contact you soon');
      this.set('emailAddress','');
      this.set('message','');
    }
  }
});
