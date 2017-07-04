import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    //console.log(params)
    return this.store.findRecord('library',params.id);
  },
  setupController:function(controller, model){
    this._super(controller, model);
    controller.set('title', 'Edit a library');
    controller.set('buttonLabel', 'Save');

  },
  renderTemplate(){
    this.render('libraries/form');
  },
  actions:{
    saveLibrary:function(library){
      library.save().then(()=>{
        this.transitionTo('libraries');
      });
    },
    willTransition:function(transition){
      let model = this.controller.get('model');
      if(model.get('hasDirtyAttributes')){
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
         if (confirmation) {
           model.rollbackAttributes();
         } else {
           transition.abort();
         }
      }
    }
  }
});
