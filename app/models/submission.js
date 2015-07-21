import DS from 'ember-data';


export default DS.Model.extend({
  title: DS.attr(),
  link: DS.attr(),
  community: DS.belongsTo('community'),
  ready: function(/* evt */){
    var adapter = this.store.adapterFor(this.constructor.modelName);
    adapter.subscribe(this);
  }
});
