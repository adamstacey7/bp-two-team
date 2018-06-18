import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('member', 'Unit | Model | member', function(hooks) {
  setupTest(hooks);

  test('should have educations relation', function(assert) {
    const Member = this.owner.lookup('service:store').modelFor('member');

    // lookup the relationship on the user model
    const relationship = get(Member, 'relationshipsByName').get('educations');

    assert.equal(relationship.key, 'educations', 'has relationship with education');
    assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
  });

  test('should have experience relation', function(assert) {
    const Member = this.owner.lookup('service:store').modelFor('member');

    // lookup the relationship on the user model
    const relationship = get(Member, 'relationshipsByName').get('experiences');

    assert.equal(relationship.key, 'experiences', 'has relationship with experiences');
    assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
  });
});