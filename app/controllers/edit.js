import Controller from '@ember/controller';

export default Controller.extend({
  showErrorModal: false,
  actions: {
    closeModal() {
      this.set('showErrorModal', false)
      document.getElementById("correctAnswer-Input").focus();
    },

    editForm(id) {
      let self = this;
      let text = this.get("model.text");
      let answerA = this.get("model.answerA");
      let answerB = this.get("model.answerB");
      let answerC = this.get("model.answerC");
      let answerD = this.get("model.answerD");
      let correctAnswer = this.get("model.correctAnswer");

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
        //Edit Question
        this.store.findRecord("question", id).then(question => {
          question.set("text", text);
          question.set("answerA", answerA);
          question.set("answerB", answerB);
          question.set("answerC", answerC);
          question.set("answerD", answerD);
          question.set("correctAnswer", correctAnswer);

          // Save to Firebase
          question.save();

          // Redirect back to index;
          self.transitionToRoute("/");
        });

        // //Clear Form
        // this.setProperties({
        //   text: "",
        //   answerA: "",
        //   answerB: "",
        //   answerC: "",
        //   answerD: "",
        //   correctAnswer: ""
        // });

        console.log("Edit Saved");
      } else {
        // errorModal.classList.remove("modal-hide");
        // errorModal.classList.add("modal-show");
        this.set('showErrorModal', true);
      }
    }
  }
});
