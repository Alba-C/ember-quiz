import Route from "@ember/routing/route";


export default Route.extend({
  
  actions: {
    refreshModel: function () {
      this.refresh();
    }
  },
  model() {
    let currentQ = this.controllerFor('quiz').currentNum - 1
  
    let quizArrIds = [];
    return this.store
      .findAll("question").then(e => {
         e.map(x => {
          // console.log(x.toJSON())
          quizArrIds.push(x.toJSON())
        }) 
        this.controllerFor("quiz").set("totalQuestions", quizArrIds.length);
        return quizArrIds[currentQ]
      }
    )
     
  }
});
