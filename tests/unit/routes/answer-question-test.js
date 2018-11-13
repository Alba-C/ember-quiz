import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | answer-question', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:answer-question');
    assert.ok(route);
  });
});
