import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

function generateMockData(server) {
  server.createList('member', 2, {
    experiences: server.createList('experience', 2),
    educations: server.createList('education', 2)
  });
}

module('Acceptance | edit member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting 0/edit', async function(assert) {
    generateMockData(server);
    await visit('/member/0/edit');

    assert.equal(currentURL(), '/member/0/edit');
  });

  test('check /member/3/edit redirects to 404 page', async function(assert) {
    await visit('/member/3/edit');

    assert.equal(
      this.element.querySelector('h1').textContent,
      'Route not found 404'
    );
  });
});
