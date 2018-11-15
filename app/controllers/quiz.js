import Controller from '@ember/controller';

export default Controller.extend({
  selectedA: false,
  selectedB: false,
  selectedC: false,
  selectedD: false,
  currentSelection: "",
  correctAnswer: "",
  currentNum: 2,
  totalQuestions: 0,
  totalCorrect: 0,
  totalWrong: 0,

  
  actions: {
    selectAnswer(id, correctAnswer) {
      const target = event.target.id;

      this.set("selectedA", false);
      this.set("selectedB", false);
      this.set("selectedC", false);
      this.set("selectedD", false);

      console.log("this id selected", id, "selected target", target);

      switch (target) {
        case "A":
          return this.setProperties({ selectedA: true, currentSelection: "A" });
        case "B":
          return this.setProperties({ selectedB: true, currentSelection: "B" });
        case "C":
          return this.setProperties({ selectedC: true, currentSelection: "C" });
        default:
          return this.setProperties({ selectedD: true, currentSelection: "D" });
      }
    },

    closeModal(id) {
      const closeModal = document.getElementById(id);
      closeModal.classList.add("modal-hide");
    },

    nextQuestion(id) {
      console.log("currentNum", this.currentNum, "totalQuesitons", this.totalQuestions );
      this.actions.closeModal(id);
      if (this.currentNum < this.totalQuestions) {
        this.set('currentNum', this.currentNum + 1)
      } else {
        completeModal.classList.remove("modal-hide");
        completeModal.classList.add("modal-show");
      }
    },

    resetQuiz(id) {
      this.actions.closeModal(id);
      this.setProperties({currentNum: 1, currentSelection: ""})
    },

    submitAnswer(correctAnswer, question) {
      const correct = correctAnswer.toLowerCase();
      const selected = this.currentSelection.toLowerCase();

      switch (correct) {
        case "a":
          this.set("correctAnswer", `A: ${question.answerA}`);
          break;
        case "b":
          this.set("correctAnswer", `B: ${question.answerB}`);
          break;
        case "c":
          this.set("correctAnswer", `C: ${question.answerC}`);
          break;
        default:
          this.set("correctAnswer", `D: ${question.answerD}`);
          break;
      }

      const successModal = document.getElementById("successModal");
      const failModal = document.getElementById("failModal");

      if (correct === selected) {
        this.set
        successModal.classList.remove("modal-hide");
        successModal.classList.add("modal-show");
      } else {
        failModal.classList.remove("modal-hide");
        failModal.classList.add("modal-show");
      }
    }
  }
});
