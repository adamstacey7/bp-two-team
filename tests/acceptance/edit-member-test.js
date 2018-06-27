import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
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
});
