import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

const BIO =
  'Adam is an IT professional passionate about front end development and . He has experience in all areas of the SDLC (Software Development Life Cycle) and excellent technical skills. He is a driven individual with a wide breadth of knowledge and a thirst for learning. He has been responsible for the development and maturity of software engineering process of front end development teams, and has a keen understanding of responsive design principles, is experienced in using Functional and Unit Testing methods. He is proficient in HTML5, CSS 3, JavaScript, AJAX and well versed with modern JavaScript libraries such as ReactJS and AngularJS. He also has experience of leading teams both onshore and offshore, but equally comfortable working on my own initiative or being part of a productive team.';

module('Acceptance | member view', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /member', async function(assert) {
    await visit('/member/1');
    assert.equal(currentURL(), '/member/1');
  });

  test('check /member/1 pulls through corret user data', async function(assert) {
    await visit('/member/1');

    assert.equal(
      this.element.querySelector('.name').textContent.trim(),
      'Adam Stacey'
    );

    assert.equal(
      this.element.querySelector('.role').textContent.trim(),
      'Tech Lead'
    );

    assert.equal(
      this.element.querySelector('.bio').textContent.trim(),
      BIO,
      'should equal the bio returned from mirage'
    );

    assert.equal(
      this.element.querySelectorAll('.skills ul li').length,
      5,
      'should equal the number of skills returned from mirage'
    );

    assert.equal(
      this.element.querySelectorAll('.technologies ul li').length,
      5,
      'should equal the number of skills returned from mirage'
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
