import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  submissions: DS.hasMany('submission', {async: false})
});
