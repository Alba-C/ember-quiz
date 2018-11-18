import Route from "@ember/routing/route";


export default Route.extend({
  
  actions: {
    refreshModel: function () {
      this.refresh();
    }
  },
  model() {
   
   
    // const data = this.get('question-view')
    // console.log('data', data);
    let currentQ = this.controllerFor('quiz').currentNum - 1
    console.log('currentQ', currentQ);
    // let controlModel = this.controllerFor('quiz').nextID();
    // console.log('controlModel', controlModel);
    
    
    console.log("controller", this.controllerFor('quiz'));
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
      // .then(allQs => 
      //   allQs.map(question => {
      //     quizArrIds.push(question.id);
      //   })
      // )
      // .then(() => {
        
      //   this.controllerFor("quiz").set("totalQuestions", quizArrIds.length);
      //   this.controllerFor("quiz").set("arr", (i)=>{return quizArrIds} );
      //   return this.store.findRecord("question", quizArrIds[currentQ]);
      // });

    // this.store.findRecord('question', quizArrIds[this.currentQuestion])
  }
});
