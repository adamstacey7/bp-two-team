import { module, test, setupTest } from 'ember-qunit';

module('Unit | Controller | core-team', function(hooks) {
  setupTest(hooks);

  test('should call delete record and the call save for a model passed in on method deleteMember', function(assert) {
    assert.expect(4);
    const controller = this.owner.lookup('controller:core-team');

    const member = {
      deleteRecord() {
        assert.ok(true, 'should call deleteRecord');
      },
      save() {
        assert.ok(true, 'should call save');
      }
    };

    controller._deleteMember(member);
    controller.send('deleteMember', member);
  });
});
