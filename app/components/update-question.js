import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    delete(question) {
      if (confirm('Delete question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    update(question) {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
