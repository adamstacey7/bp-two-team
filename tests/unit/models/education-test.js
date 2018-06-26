import { moduleForModel, test } from 'ember-qunit';

moduleForModel('education', 'Unit | Model | education', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});
