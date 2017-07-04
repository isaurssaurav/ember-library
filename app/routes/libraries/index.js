  import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('library');
  },
  actions:{
    deleteLibrary:function(library){
      library.destroyRecord();
    }
  }
});
