import Route from '@ember/routing/route';

export default Route.extend({
  deleteID: "testDelete",
 
  model() {
    return this.store.findAll("question");
  },
  actions: {
    test(id) {
      console.log(id);
      this.componentFor('edit-question-form').set('id', id)
    }
  }
});
