import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },
  title: faker.list.cycle(
    'Digital Technology Solutions',
    'IT for professionals',
    'Btec National Diploma in IT Practitioners (Software Development)'
  ),
  start: faker.list.cycle('2015', '2012', '2009'),
  end: faker.list.cycle('2018', '2015', '2012'),
  grade: faker.list.cycle('2:1', 'Level 4', 'DMM'),
  location: faker.list.cycle('Aston University', 'QA', 'Coulsdon College')
});
