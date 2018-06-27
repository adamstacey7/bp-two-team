import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route:member/edit', function(hooks) {
  setupTest(hooks);

  test('should transitions once saved', function(assert) {
    assert.expect(3);
    const route = this.owner.lookup('route:member/edit');

    const myGetMock = () => ({
      save() {
        assert.ok(true, 'should call save');
        return Promise.resolve();
      },
      get() {
        assert.ok(true, 'should call id');
        return '5';
      }
    });

    route.modelFor = myGetMock;
    route.transitionTo = () => {
      assert.ok(true, 'should call transition');
    };

    route._saveData();
  });
});
