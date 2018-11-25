import Component from '@ember/component';
import questions from "../sample-questions";
import { inject } from '@ember/service';

export default Component.extend({
  store: inject("store"),
  showResetModal: false,
  questions: questions,
  actions: {
    resetDB() {
      this.store.findAll('question', { reload: true })
        .then(allQs => {
          allQs.forEach(record => {
         
           record.destroyRecord()
        });
        })
        .then(() => {
          this.questions.map(q => {
              //Create New Question
              let newQuestion = this.store.createRecord("question", {
                text: q.text,
                answerA: q.answerA,
                answerB: q.answerB,
                answerC: q.answerC,
                answerD: q.answerD,
                correctAnswer: q.correctAnswer
              });
      
              // Save to Firebase
             newQuestion.save();
            });
            this.set("showResetModal", false)
        
      })
    },
    showResetModal() {
      
      this.set('showResetModal', true)
    },
    closeModal() {
      this.set("showResetModal", false)
    }
  }
});
