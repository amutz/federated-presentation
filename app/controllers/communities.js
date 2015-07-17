import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add_submission: function() {
      var link = this.get('link');
      var title = this.get('title');

      console.debug(""+this.model.name);
      var submission = this.store.createRecord(
        'submission', 
        {title: title, link: link});
      submission.set('community', this.model);
      console.debug(submission.community.name)
      submission.save();
    }
  }


});
