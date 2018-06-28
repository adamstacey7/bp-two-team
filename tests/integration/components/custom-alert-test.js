import { module, test, setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | custom-alert', function(hooks) {
  setupRenderingTest(hooks);

  test('should close the modal when clicking the close button', async function(assert) {
    assert.expect(1);
    this.set('toggleVisibility', () => {
      assert.ok(true, 'should toggle the visibility');
    });

    await render(
      hbs`{{custom-alert toggleVisibility=(action toggleVisibility)}}`
    );

    await click('.close');
  });

  test('should close the modal when clicking the cancel button', async function(assert) {
    assert.expect(1);
    this.set('toggleVisibility', () => {
      assert.ok(true, 'should toggle the visibility');
    });

    await render(
      hbs`{{custom-alert toggleVisibility=(action toggleVisibility)}}`
    );

    await click('.cancel');
  });

  test('should run the custom action on confirm', async function(assert) {
    assert.expect(1);
    this.set('externalAction', actual => {
      const expected = ['params'];
      assert.equal(
        actual,
        expected,
        'should run action with params passed through'
      );
    });
    this.set('params', ['params']);
    this.set('toggleVisibility', () => {});

    await render(
      hbs`{{custom-alert toggleVisibility=(action toggleVisibility) customAction=(action externalAction) params=params}}`
    );

    await click('.confirm');
  });
});
