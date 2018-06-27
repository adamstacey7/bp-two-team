import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route:member/create', function(hooks) {
  setupTest(hooks);

  test('should call save get and transitionTo methods', function(assert) {
    assert.expect(3);
    const route = this.owner.lookup('route:member/create');

    route.modelFor = () => ({
      save() {
        assert.ok(true, 'should call save');
        return Promise.resolve(this);
      },
      get() {
        assert.ok(true, 'should call id');
        return '5';
      }
    });

    route.transitionTo = () => {
      assert.ok(true, 'should call transition');
    };

    route._createData();
  });
});
