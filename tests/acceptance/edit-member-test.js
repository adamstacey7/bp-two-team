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

  test('check /member/1/edit pulls through corret user data', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(this.element.querySelector('.first-name').textContent, 'First Name: Tom');
    assert.equal(this.element.querySelector('.last-name').textContent, 'Last Name: Smith');

    assert.equal(this.element.querySelectorAll('.experience .title')[0].textContent, 'Title: Porche');
    assert.equal(this.element.querySelectorAll('.experience .title')[1].textContent, 'Title: Landrover');
  });

  test('check /member/3/edit redirects to 404 page', async function(assert) {
    await visit('/member/3/edit');

    assert.equal(this.element.querySelector('h1').textContent, 'Route not found 404');
  });

});
