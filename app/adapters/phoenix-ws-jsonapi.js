
import DS from 'ember-data';
import ENV from "../config/environment";
import Phoenix from "../phoenix";
import Ember from "ember";
import {pluralize} from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  
  subscribe: function(subscriber) {
    this.joinChannel(pluralize(subscriber.constructor.modelName), subscriber.id);
  },

  joinChannel: function(type, id){
    var chan = this.phoenix.chan(type + ":" + id, {});
    chan.join().receive("ignore", () => console.log("auth error"))
      .receive("ok", () => {});
    chan.on("update", msg => {
      this.store.pushPayload(msg);
    });

  },
  
  phoenix: null,

  init: function(/* container, application */) {
    var uri = ENV.SocketURI;

    if (uri === undefined || uri === null) {
      console.error("You must specify a `SocketURI` in your config/environment.js file");
    } else {
      this.phoenix = new Phoenix.Socket(uri);
      this.phoenix.connect();
    }
  },
});

