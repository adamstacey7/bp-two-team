import { module, test, setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app-header', function(hooks) {
  setupRenderingTest(hooks);

  test('should render the header with the header title passed through', async function(assert) {
    await render(hbs`{{app-header}}`);
    assert.equal(
      this.element.querySelector('.header-title').textContent.trim(),
      'Team Neon',
      'should equal the title in the template'
    );
    assert.equal(
      this.element.querySelector('.create-member-link').textContent.trim(),
      'Create Member',
      'should equal the name of the link label to create member page'
    );
  });
});
