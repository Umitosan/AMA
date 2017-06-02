import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('Question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyQuestion();
      this.transitionTo('index');
    }
  }
});
