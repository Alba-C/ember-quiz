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
      let question = {
        text: this.get('text'),
        choices: [
          this.get('answer-A'),
          this.get('answer-B'),
          this.get('answer-C'),
          this.get('answer-D')
        ],
        answer: this.get('answer')
      }
      this.set('text', "")
      this.set('answer-A', "")
      this.set('answer-B', "")
      this.set('answer-C', "")
      this.set('answer-D', "")
      this.set('answer', "")
      // e.preventDefault();
      console.log("submitted");
     console.log(question)
    }
  }
});
