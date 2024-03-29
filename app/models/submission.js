import DS from 'ember-data';


export default DS.Model.extend({
  title: DS.attr(),
  link: DS.attr(),
  score: DS.attr(),
  
  community: DS.belongsTo('community'),
  
  recentlyChanged: true,

  ready: function(/* evt */){
    var adapter = this.store.adapterFor(this.constructor.modelName);
    adapter.subscribe(this);
  }
});
