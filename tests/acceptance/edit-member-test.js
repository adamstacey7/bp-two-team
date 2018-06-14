import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | edit member', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /edit-member', async function(assert) {
    await visit('/edit-member');

    assert.equal(currentURL(), '/edit-member');
  });
});
