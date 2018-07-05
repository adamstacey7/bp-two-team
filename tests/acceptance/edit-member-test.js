import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import setupMockData from '../helpers/setupMockData';

module('Acceptance | edit member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting 0/edit', async function(assert) {
    setupMockData(server);
    await visit('/member/0/edit');

    assert.equal(currentURL(), '/member/0/edit');
  });

  test('cancelling 0/edit will route users back to member/0', async function(assert) {
    setupMockData(server);
    await visit('/member/0/edit');

    assert.equal(currentURL(), '/member/0/edit');

    await click('.btn.btn-default');

    assert.equal(currentURL(), '/member/0');
  });
});
