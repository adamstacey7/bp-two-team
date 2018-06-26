import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Route | route:member/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:member/create');
    assert.ok(route);
  });

  test('it calls the create record method 3 times', function(assert) {
    const route = this.owner.lookup('route:member/create');

    const myCreateRecordSpy = sinon.spy(() => ({
      save() {
        return Promise.resolve();
      },
      get() {
        return '5';
      }
    }));

    const myGetMock = () => ({
      createRecord: myCreateRecordSpy
    });

    route.get = myGetMock;
    route.transitionTo = () => {};
    route
      ._createData({
        firstName: 'test first name',
        lastName: 'test last name'
      })
      .then(() => {
        assert.equal(myCreateRecordSpy.callCount, 3);
        assert.ok(route);
      });
  });
});
