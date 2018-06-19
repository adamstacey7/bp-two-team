import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

const DETAILS_1 =
  'Digital Services at the Border Programme. responsible for; Developing the frontend client for AFTC ensuring a high standard of delivery is met, Advising client of best practice for the UX/UI of AFTC and collaborating with BA’s to flush out wireframes, Supporting test team when needed and advising approaches to improve regression pack, Optimising frontend efficiency by creating generic reusable AngularJS components and utilising his frontend knowledge to suggest and improve current functionality and tech debt.';
const DETAILS_2 =
  'Working on a membership programme enhancing and developing the frontend assets working along side the clients frontend team.';
const DETAILS_3 =
  'Working on project MetSearch, which is a project that implements multiple data sources within the public sector and lets officers on the street search across these data sources and the results to be displayed via desktop browser or iPad App. Responsibilities; Implement new designs into Markup, reskin application to new designs with CSS, work closely with client and designers to optimise mobile experience of application, gather requirements on how application behaves and ensure these requirements are met and signed off, build functionality of application with JavaScript and AngularJS';

module('Acceptance | edit member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /member/1/edit', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(currentURL(), '/member/1/edit');
  });

  test('check /member/1/edit pulls through corret user data', async function(assert) {
    await visit('/member/1/edit');

    assert.equal(
      this.element.querySelector('.first-name').textContent,
      'First Name: Adam'
    );
    assert.equal(
      this.element.querySelector('.last-name').textContent,
      'Last Name: Stacey'
    );

    assert.equal(
      this.element.querySelectorAll('.experience .title')[0].textContent,
      `Title: ${DETAILS_1}`
    );
    assert.equal(
      this.element.querySelectorAll('.experience .title')[1].textContent,
      `Title: ${DETAILS_2}`
    );

    assert.equal(
      this.element.querySelectorAll('.experience .title')[2].textContent,
      `Title: ${DETAILS_3}`
    );

    assert.equal(
      this.element.querySelectorAll('.education .title')[0].textContent,
      'Title: Digital Technology Solutions'
    );
    assert.equal(
      this.element.querySelectorAll('.education .title')[1].textContent,
      'Title: IT for professionals'
    );
  });

  test('check /member/3/edit redirects to 404 page', async function(assert) {
    await visit('/member/3/edit');

    assert.equal(
      this.element.querySelector('h1').textContent,
      'Route not found 404'
    );
  });
});
