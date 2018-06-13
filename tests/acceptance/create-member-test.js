import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | create member', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /member/create', async function(assert) {
    await visit('/member/create');

    assert.equal(currentURL(), '/member/create');
  });

  test('check /member/create prompts user to create memeber', async function(assert) {
    await visit('/member/create');

    assert.equal(this.element.querySelector('h2').textContent, 'Please create a member');
  });
});
