import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) { return `${i}`; },
  firstName: faker.list.cycle('Tom', 'Mark'),
  lastName: faker.list.cycle('Smith', 'Peterson')
});