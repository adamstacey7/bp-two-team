import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) { return `${i}`; },
  firstName: faker.list.cycle('Adam'),
  lastName: faker.list.cycle('Stacey'),
  profileImage: faker.list.cycle('adam-stacey.jpeg'),
  role: faker.list.cycle('Tech Lead')
});