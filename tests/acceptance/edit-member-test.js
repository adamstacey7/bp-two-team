import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | edit member', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /member/1/edit', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(currentURL(), '/member/1/edit');
  });

  test('check /member/1/edit pulls through corret user data', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(this.element.querySelector('.first-name').textContent, 'First Name: Tom');
    assert.equal(this.element.querySelector('.last-name').textContent, 'Last Name: Smith');
  });

  test('check /member/3/edit redirects to 404 page', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(this.element.querySelector('h1').textContent, 'Route not found 404');
  });

});
