import { Factory, faker } from 'ember-cli-mirage';

//   const educationData = [
//     {
//       "type": "education",
//       "id": "1",
//       "attributes": {
//         "title": "School",
//         "start-date": "1529061341148",
//         "end-date": "1529061347803"
//       }
//     },
//     {
//       "type": "education",
//       "id": "2",
//       "attributes": {
//         "title": "Uni",
//         "start-date": "1529061341148",
//         "end-date": "1529061347803"
//       }
//     }    
//   ];

export default Factory.extend({
  id(i) { return `${i}`; },
  title: faker.list.cycle('School', 'Uni'),
  startDate: faker.list.cycle('1529061341148', '1529061341148'),
  endDate: faker.list.cycle('1529061347803', '1529061347803')
});