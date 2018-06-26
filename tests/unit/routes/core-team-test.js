import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core-team', function(hooks) {
  setupTest(hooks);

  test('should call delete record and the call save for a model passed in on method deleteMember', function(assert) {
    assert.expect(4);
    const route = this.owner.lookup('route:core-team');

    const member = {
      deleteRecord() {
        assert.ok(true, 'should call deleteRecord');
      },
      save() {
        assert.ok(true, 'should call save');
      }
    };

    route._deleteMember(member);
    route.send('deleteMember', member);
  });
});
