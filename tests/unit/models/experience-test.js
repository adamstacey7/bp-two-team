import { moduleForModel, test } from 'ember-qunit';

moduleForModel('experience', 'Unit | Model | experience', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});
