import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    // embed: true,
    // alwaysIncludeLinkageData: true,
    // serializeIds: 'always',
  include() {
    return [
      'experiences'
    ]
  }
});
