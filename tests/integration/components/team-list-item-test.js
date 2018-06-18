import { module, test, setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app-header', function(hooks) {
  setupRenderingTest(hooks);

  test('should render the header with the header title passed through', async function(assert) {
    await render(hbs`{{test-list-item}}`);
    assert.equal(
      this.element.querySelector('').textContent.trim(),
      'test title',
      'should be equal to the title passed through'
    );
  });
});
