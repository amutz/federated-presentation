import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add_submission: function() {
      var link = this.get('link');
      var title = this.get('title');

      var submission = this.store.createRecord(
        'submission', 
        {title: title, link: link, score: 0});
      submission.set('community', this.model);
      submission.save();
    },
    acceptChanges: function(edited){
      console.debug(edited);
      edited.save();
    },
    upvote: function(submission){
      submission.set('score', 1 + submission.get('score')); 
      submission.save();
    },
    downvote: function(submission){
      submission.set('score', -1 + submission.get('score')); 
      submission.save();
    }
  },
  submissions: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['score'],
      content: this.get('model.submissions'),
      sortAscending: false
    });
  }).property('model.submissions')

});
