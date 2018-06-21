import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | edit member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /member/1/edit', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(currentURL(), '/member/1/edit');
  });
});
