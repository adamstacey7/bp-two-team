import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | create member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  
  test('visiting /member/create', async function(assert) {
    await visit('/member/create');

    assert.equal(currentURL(), '/member/create');
  });

  test('check /member/create prompts user to create member', async function(assert) {
    await visit('/member/create');

    assert.equal(this.element.querySelector('h2').textContent, 'Please create a member');
  });

  test('check user can submit first name and last name', async function(assert) {
    await visit('/member/create');

    await fillIn('input.first-name', 'Adam');
    await fillIn('input.last-name', 'Smith');

    await click('button.submit');

    assert.equal(currentURL(), '/member/123');
  });
});
