import { module, test, setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ITEM = {
  firstName: 'Aidan',
  lastName: 'Freeman',
  role: 'Dev',
  profileImage: 'fake.jpg'
};

module('Integration | Component | team-list-item', function(hooks) {
  setupRenderingTest(hooks);

  test('should render the team list item with the data displayed correctly', async function(assert) {
    this.set('member', ITEM);
    await render(hbs`{{team-list-item member=member}}`);
    assert.equal(
      this.element.querySelector('.photo').getAttribute('src'),
      `${ITEM.profileImage}`,
      'should equal the path to images suffixed with the mock image file name'
    );
    assert.equal(
      this.element.querySelector('.name').textContent.trim(),
      'Aidan Freeman',
      'should be equal to the title passed through'
    );
    assert.equal(
      this.element.querySelector('.role').textContent.trim(),
      'Dev',
      'should be equal to the role passed through'
    );
  });

  test('should trigger the delete external action', async function(assert) {
    assert.expect(1);

    this.set('externalAction', () => {
      assert.ok(true);
    });

    await render(
      hbs`{{team-list-item toggleConfirmation=(action externalAction)}}`
    );
    await click('.delete');
  });
});
