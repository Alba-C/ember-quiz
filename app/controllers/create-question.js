import Controller from '@ember/controller';

export default Controller.extend({

  // question: {
  //     text: "",
  //     choices: [
  //       "",
  //       "",
  //       "",
  //       ""
  //     ],
  //     answer: this.get('answer')
  //   },

  actions: {
    submitForm() {
      
      let text = this.get('text');
      let answerA = this.get('answer-A');
      let answerB = this.get('answer-B');
      let answerC = this.get('answer-C');
      let answerD = this.get('answer-D');
      let correctAnswer = this.get('answer');
      


      //Create New Question
      let newQuestion = this.store.createRecord('question', {
        text,
        answerA,
        answerB,
        answerC,
        answerD,
        correctAnswer,
      });

        // Save to Firebase
        newQuestion.save();

      //Clear Form
      this.setProperties({
        text: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        correctAnswer: '',
      })
      // this.set('text', "")
      // this.set('answer-A', "")
      // this.set('answer-B', "")
      // this.set('answer-C', "")
      // this.set('answer-D', "")
      // this.set('answer', "")
      // e.preventDefault();
      console.log("submitted");
    
    }
  }
});
