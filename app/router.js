import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('communities', { path: '/communities/:community_id'}, function() {
  });
});


export default Router;
