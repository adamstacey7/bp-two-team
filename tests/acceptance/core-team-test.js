import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
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

  test('should display header with correct title', async function(assert) {
    await visit('/');
    assert.equal(
      this.element.querySelector('.header .title').textContent.trim(),
      'Team Overview',
      'should display header of front page'
    );
  });

  test('should display correct number of team members', async function(assert) {
    await visit('/');
    assert.equal(
      this.element.querySelectorAll('.member').length,
      1,
      'should be equal to the number of members returned from ember data'
    );
  });

  test('should go to member click of member', async function(assert) {
    await visit('/');
    await click('.member:first-child');
    assert.equal(
      currentURL(),
      '/member/1',
      "should navigate to first member's page"
    );
  });
});
