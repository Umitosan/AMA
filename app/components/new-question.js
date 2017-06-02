import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
      this.set('author', '');  // clear the inputs previous info
      this.set('body', '');
    },
    saveQuestion() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
