import Route from "@ember/routing/route";


export default Route.extend({
  quizLength: 0,
  currentQuestion: 0,
  


  model() {
    // const data = this.get('question-view')
    // console.log('data', data);
    
    

    let quizArrIds = [];
    return this.store
      .findAll("question")
      .then(allQs =>
        allQs.map(question => {
          quizArrIds.push(question.id);
        })
      )
      .then(() => {
        return this.store.findRecord("question", quizArrIds[1]);
      });

    // this.store.findRecord('question', quizArrIds[this.currentQuestion])
  }
});
