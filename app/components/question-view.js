import Component from '@ember/component';

export default Component.extend({
  selectedA: false,
  selectedB: false,
  selectedC: false,
  selectedD: false,
  currentSelection: "",

  actions: {
    selectAnswer(id, correctAnswer) {
      const target = event.target.id;

      this.set("selectedA", false);
      this.set("selectedB", false);
      this.set("selectedC", false);
      this.set("selectedD", false);

      console.log(
        "this id selected",
        id,
        "selected target",
        target,
       
      );

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

    submitAnswer(correctAnswer) {
      const correct = correctAnswer.toLowerCase();
      const selected = this.currentSelection.toLowerCase();
      console.log("Correct Answer: ", correct, "Selected Answer", selected);

      correct === selected ? console.log("correct") : console.log("wrong")
    }
  }
});
