import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  include() {
    return [
      'experiences',
      'educations'
    ]
  }
});
