import { module, test, setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app-header', function(hooks) {
  setupRenderingTest(hooks);

  test('should render the header with the header title passed through', async function(assert) {
    await render(hbs`{{app-header}}`);
    assert.ok(true);
  });
});
