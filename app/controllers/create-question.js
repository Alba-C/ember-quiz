import Controller from "@ember/controller";

export default Controller.extend({
  showErrorModal: false,
  actions: {
    closeModal() {
      this.set("showErrorModal", false);
      document.getElementById("correctAnswer-Input").focus();
    },
    submitForm() {
      let text = this.get("text");
      let answerA = this.get("answerA");
      let answerB = this.get("answerB");
      let answerC = this.get("answerC");
      let answerD = this.get("answerD");
      let correctAnswer = this.get("correctAnswer");

      if (
        correctAnswer === "A" ||
        correctAnswer === "a" ||
        correctAnswer === "B" ||
        correctAnswer === "b" ||
        correctAnswer === "C" ||
        correctAnswer === "c" ||
        correctAnswer === "D" ||
        correctAnswer === "d"
      ) {
        //Create New Question
        let newQuestion = this.store.createRecord("question", {
          text,
          answerA,
          answerB,
          answerC,
          answerD,
          correctAnswer
        });

        // Save to Firebase
        newQuestion.save();

        //Clear Form
        this.setProperties({
          text: "",
          answerA: "",
          answerB: "",
          answerC: "",
          answerD: "",
          correctAnswer: ""
        });
        this.transitionToRoute('/');
       } else {
        this.set('showErrorModal', true);
        
      }
    }
  }
});
