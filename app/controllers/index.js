import Controller from '@ember/controller';

export default Controller.extend({
  deleteID: "testDelete",
  showDeleteModal: false,
  
  actions: {
    
    closeModal() {
      this.set('showDeleteModal', false);
    },

    confirmDelete(id) {
      this.set('showDeleteModal', true);
      this.set('deleteID', id);
    },
    deleteQuestion() {

        this.store.findRecord('question', this.deleteID)
        .then(q => {
          q.deleteRecord();
          q.get('isDeleted');
          q.save()
          this.set('deleteID', "")
          this.set('showDeleteModal', false)
        })
    }
  }
});
