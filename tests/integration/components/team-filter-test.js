import { module, test, setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{ role: 'Tech Lead' }, { role: 'Product Owner' }];
const FILTERED_ITEMS = [{ role: 'Tech Lead' }];

module('Integration | Component | team-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('should initially show all team members', async function(assert) {
    this.set('filterTeam', () => resolve({ results: ITEMS }));
    await render(hbs`
    {{#team-filter filter=(action filterTeam) as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="role">
          {{item.role}}
        </li>
      {{/each}}
      </ul>
    {{/team-filter}}
  `);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.role').length, 2);
      assert.equal(
        this.element.querySelector('.role').textContent.trim(),
        'Tech Lead'
      );
    });
  });

  test('should update with matching listings', async function(assert) {
    this.set('filterTeam', (val, type) => {
      let resolveCall;
      if (val === '' || type === '')
        resolveCall = resolve({
          query: val,
          results: ITEMS
        });
      else
        resolveCall = resolve({
          query: val,
          results: FILTERED_ITEMS
        });

      return resolveCall;
    });

    await render(hbs`
    {{#team-filter filter=(action filterTeam) as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="role">
          {{item.role}}
        </li>
      {{/each}}
      </ul>
    {{/team-filter}}
  `);

    const option = this.element.querySelectorAll('select option')[1].value;
    await fillIn(this.element.querySelector('select'), option);
    await fillIn(this.element.querySelector('.team-filter input'), 't');
    await triggerKeyEvent(
      this.element.querySelector('.team-filter input'),
      'keyup',
      83
    );

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.role').length, 1);
      assert.equal(
        this.element.querySelector('.role').textContent.trim(),
        'Tech Lead'
      );
    });
  });
});
