import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';
import PhoenixWsJsonapi from './adapters/phoenix-ws-jsonapi';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ApplicationAdapter: PhoenixWsJsonapi.extend({}),
  ApplicationSerializer: DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {})
});


loadInitializers(App, config.modulePrefix);

export default App;
