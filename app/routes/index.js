import Route from '@ember/routing/route';

export default Route.extend({
  deleteID: "testDelete",
 
  model() {
    return this.store.findAll("question");
  },

});
