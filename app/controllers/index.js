import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  emailAddress: '',

  actualEmailAddress: Ember.computed('emailAddress',function() {
        console.log('actualEmailAddress funciton is called', this.get('emailAddress'));
       return this.get('emailAddress');
    }),
  emailAddressChanged: Ember.observer('emailAddress', function(){
      console.log('emailAddressChanged funciton called', this.get('emailAddress'));
  }),
  actions:{
    saveInvitation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then(response =>{
        //console.log(response);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}
        in _id ${response.get('id')}` );
        this.set('emailAddress', '');
      });
      //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
    }
  }
});
