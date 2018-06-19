import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | core team', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /core-team or /', async function(assert) {
    await visit('/core-team');
    assert.equal(currentURL(), '/core-team');

    await visit('/');
    assert.equal(currentURL(), '/core-team');
  });

  test("should have the text 'Hello World!", async function(assert) {
    await visit('/');
    assert.equal(
      this.element.querySelector('.header .title').textContent.trim(),
      'Team Overview',
      'should display header of front page'
    );
  });
});
