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
  showSuccessModal: false,
  showFailModal: false,
  showCompleteModal: false,
  showNoSelectionModal: false,


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

    closeModal() {
      this.setProperties({ showSuccessModal: false, showFailModal: false, showCompleteModal: false, showNoSelectionModal: false})
    },

    nextQuestion() {
    
      this.setProperties({
        selectedA: false,
        selectedB: false,
        selectedC: false,
        selectedD: false,
        currentSelection: "",
        showSuccessModal: false,
        showFailModal: false,
        showCompleteModal: false,
        showNoSelectionModal: false
      });
      let cntrl = this;
      
      if (this.currentNum < this.totalQuestions) {
        this.set("currentNum", this.currentNum + 1);
        cntrl.send("refreshModel");
        this.transitionToRoute("quiz");
      } else {
        this.set("showCompleteModal", true);
      }
    },

    resetQuiz() {
     
      this.setProperties({
        currentNum: 1,
        currentSelection: "",
        totalCorrect: 0,
        totalWrong: 0,
        showSuccessModal: false,
        showFailModal: false,
        showCompleteModal: false,
        showNoSelectionModal: false
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
          this.set("showSuccessModal", true);
        
        } else {
          this.set("totalWrong", this.totalWrong + 1);
          this.set("showFailModal", true);
        }
      } else {
        this.set("showNoSelectionModal", true);
       
      }
    }
  }
});
