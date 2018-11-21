import Controller from "@ember/controller";

export default Controller.extend({
  selectedA: false,
  selectedB: false,
  selectedC: false,
  selectedD: false,
  currentSelection: "",
  correctAnswer: "",
  currentNum: 1,
  totalQuestions: 0,
  totalCorrect: 0,
  totalWrong: 0,

  init() {
    this._super();
    this.setProperties({
      selectedA: false,
      selectedB: false,
      selectedC: false,
      selectedD: false,
      currentSelection: "",
      correctAnswer: "",
      currentNum: 1,
      totalQuestions: 0,
      totalCorrect: 0,
      totalWrong: 0
    });
    console.log("initialized")
  },
  
  didInsertElement() {
   console.log("inserted"); 
  },
  actions: {
    selectAnswer(id) {
      const target = event.target.id;
      this.setProperties({
        selectedA: false,
        selectedB: false,
        selectedC: false,
        selectedD: false
      });

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
      this.setProperties({
        selectedA: false,
        selectedB: false,
        selectedC: false,
        selectedD: false,
        currentSelection: ""
      });
      let cntrl = this;

      this.actions.closeModal(id);
      if (this.currentNum < this.totalQuestions) {
        this.set("currentNum", this.currentNum + 1);
        cntrl.send("refreshModel");
        this.transitionToRoute("quiz");
      } else {
        completeModal.classList.remove("modal-hide");
        completeModal.classList.add("modal-show");
      }
    },

    resetQuiz(id) {
      this.actions.closeModal(id);
      this.setProperties({
        currentNum: 1,
        currentSelection: "",
        totalCorrect: 0,
        totalWrong: 0
      });
    },

    submitAnswer(correctAnswer, question) {
      if (this.currentSelection) {
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
          this.setProperties({
            totalCorrect: this.totalCorrect + 1,
            selectAnswer: ""
          });
          successModal.classList.remove("modal-hide");
          successModal.classList.add("modal-show");
        } else {
          this.set("totalWrong", this.totalWrong + 1);
          failModal.classList.remove("modal-hide");
          failModal.classList.add("modal-show");
        }
      } else {
        noSelectionModal.classList.remove("modal-hide");
        noSelectionModal.classList.add("modal-show");
      }
    }
  }
});
