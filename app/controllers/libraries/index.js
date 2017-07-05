import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['search'],
	search: '',
	filteredList: Ember.computed('search', 'model.[]', function(){
		var search = this.get('search');
		var libraries = this.get('model');
		if (libraries) {
	    	const regexString = '(' + search.split(' ').join(')+.*(') + ')+.*';
			// i: case insensitive, g: global
			const regex = new RegExp(regexString, 'ig');
      		var results = libraries.filter((item) => item.get('name').match(regex));
			return results;
		} else {
			return libraries;
		}
	})
	
});
