import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  isAddingButtonDisabled: Ember.computed.empty('name')
});
