import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service('store'),
  text: "text",
  idController: "testComponent",
  items: [],

  init() {
    this._super()
    let items = this.store.findAll('question');
    this.set('items', items);
    console.log("items", this.items)
    this.model()
  },
  model() {
    const editQ = this.store.findRecord("question", "-LRgZhHLJpHnU_8w8IP_");
    console.log("editQ", editQ);
    return editQ;
  }
});
