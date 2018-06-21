import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) { return `${i}`; },
  title: faker.list.cycle('Porche', 'Landrover'),
  startDate: faker.list.cycle('1529061341148', '1529061341148'),
  endDate: faker.list.cycle('1529061347803', '1529061347803')
});