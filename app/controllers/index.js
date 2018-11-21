import Controller from '@ember/controller';

export default Controller.extend({
  deleteID: "testDelete",
  
  actions: {
    editQuestion(id) {
      console.log("answer", id);
      this.set("deleteID", id);
      console.log(this.deleteID)
      editQuestionModal.classList.remove("modal-hide");
      editQuestionModal.classList.add("modal-show");

    },

    closeModal(id) {
      const closeModal = document.getElementById(id);
      closeModal.classList.add("modal-hide");
    },

    confirmDelete(id) {
      console.log("confirmDelete", id);
      // deleteQuestionModal.classList.remove("modal-hide");
      // deleteQuestionModal.classList.add("modal-show");
      document.getElementById('deleteQuestionModal').classList.remove('modal-hide');
      document.getElementById('deleteQuestionModal').classList.add('modal-show');
      this.set('deleteID', id)
    },
    deleteQuestion() {
      console.log(this.deleteID);

      this.store.findRecord('question', this.deleteID)
        .then(q => {
          q.deleteRecord();
          q.get('isDeleted');
          q.save()
          this.set('deleteID', "")
        })
    }
  }
});
