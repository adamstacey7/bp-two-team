import { Factory, faker } from 'ember-cli-mirage';

//   const experienceData = [
//     {
//       "type": "experience",
//       "id": "1",
//       "attributes": {
//         "title": "Porche",
//         "start-date": "1529061341148",
//         "end-date": "1529061347803"
//       }
//     },
//     {
//       "type": "experience",
//       "id": "2",
//       "attributes": {
//         "title": "Landrover",
//         "start-date": "1529061341148",
//         "end-date": "1529061347803"
//       }
//     }
//   ];

export default Factory.extend({
  id(i) { return `${i}`; },
  title: faker.list.cycle('Porche', 'Landrover'),
  startDate: faker.list.cycle('1529061341148', '1529061341148'),
  endDate: faker.list.cycle('1529061347803', '1529061347803')
});