import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  answerA: DS.attr('string'),
  answerB: DS.attr('string'),
  answerC: DS.attr('string'),
  answerD: DS.attr('string'),
  correctAnswer: DS.attr('string')

 });
