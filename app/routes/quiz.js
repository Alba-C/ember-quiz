import Route from "@ember/routing/route";


export default Route.extend({
  model() {
    // const data = this.get('question-view')
    // console.log('data', data);
    
    let currentQ = this.controllerFor('quiz').currentNum -1
    console.log('currentQ', currentQ);
    console.log("controller", this.controllerFor('quiz'));
    let quizArrIds = [];
    return this.store
      .findAll("question")
      .then(allQs => 
        allQs.map(question => {
          quizArrIds.push(question.id);
        })
      )
      .then(() => {
        
        this.controllerFor("quiz").set("totalQuestions", quizArrIds.length);
        return this.store.findRecord("question", quizArrIds[currentQ]);
      });

    // this.store.findRecord('question', quizArrIds[this.currentQuestion])
  }
});
