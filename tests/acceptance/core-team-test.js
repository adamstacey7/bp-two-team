import { module, test, skip } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import setupMockData from '../helpers/setupMockData';

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
    setupMockData(server);
    await visit('/');
    assert.equal(
      this.element.querySelectorAll('.member').length,
      1,
      'should be equal to the number of members returned from ember data'
    );
  });

  test('should go to member click of member', async function(assert) {
    setupMockData(server);
    await visit('/');
    await click('.member:first-child .details');
    assert.equal(
      currentURL(),
      '/member/0',
      "should navigate to first member's page"
    );
    assert.equal(
      this.element.querySelector('.first-name').textContent.trim(),
      'First Name: Adam',
      'should equal first name of member 1'
    );
    assert.equal(
      this.element.querySelector('.last-name').textContent.trim(),
      'Last Name: Stacey',
      'should equal last name of member 1'
    );
  });

  skip('should delete member when clicking delete button for that member', async function(assert) {
    setupMockData(server);
    await visit('/');

    assert.equal(this.element.querySelectorAll('.member').length, 1);

    await click('.delete:first-child');

    assert.equal(currentURL(), '/core-team');
    assert.equal(this.element.querySelectorAll('.member').length, 0);
  });
});
