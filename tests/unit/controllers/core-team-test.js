import { module, test, setupTest } from 'ember-qunit';

const MEMBER = {
  firstName: 'Aidan',
  lastName: 'Freeman'
};

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

  test('should call toggleProperty to make confirmation appear', function(assert) {
    assert.expect(2);
    const controller = this.owner.lookup('controller:core-team');

    controller.toggleProperty = actual => {
      const expected = 'confirmation';
      assert.equal(
        actual,
        expected,
        'should equal the property given to toggle'
      );
    };

    controller._toggleConfirmation();
    controller.send('toggleConfirmation');
  });

  test('should set the confirmation details before toggling the confirmation property', function(assert) {
    assert.expect(9);
    const controller = this.owner.lookup('controller:core-team');

    controller.toggleProperty = actual => {
      const expected = 'confirmation';
      assert.equal(
        actual,
        expected,
        'should equal the property given to toggle'
      );
    };

    controller.set = (key, value) => {
      assert.ok(key, 'should pass through a key');
      assert.ok(value, 'should pass through a value');
    };

    controller._setConfirmationDetails(MEMBER);
    controller.send('setConfirmationDetails', MEMBER);
  });
});
