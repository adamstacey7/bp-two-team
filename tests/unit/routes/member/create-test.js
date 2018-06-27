import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route:member/create', function(hooks) {
  setupTest(hooks);

  test('it calls the create record method 3 times', function(assert) {
    const route = this.owner.lookup('route:member/create');

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

    return route._createData();
  });
});
