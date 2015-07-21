import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add_submission: function() {
      var link = this.get('link');
      var title = this.get('title');

      var submission = this.store.createRecord(
        'submission', 
        {title: title, link: link});
      submission.set('community', this.model);
      submission.save();
    },
    acceptChanges: function(edited){
      console.debug(edited);
      edited.save();
    }
  }


});
