import { Factory, faker } from 'ember-cli-mirage';

// const memberData = [
//     {
//       "type": "member",
//       "id": "1",
//       "attributes": {
//         "first-name": "Tom",
//         "last-name": "Smith",
//       },
//       "relationships": {
//         "experiences": {
//           "data": [
//             {
//               "type": "experience",
//               "id": "1"
//             },
//             {
//               "type": "experience",
//               "id": "2"
//             }          
//           ]
//         },
//         "educations": {
//           "data": [
//             {
//               "type": "education",
//               "id": "1"
//             },
//             {
//               "type": "education",
//               "id": "2"
//             }          
//           ]          
//         }
//       },
//     },
//     {
//       "type": "member",
//       "id": "2",
//       "attributes": {
//         "first-name": "Mark",
//         "last-name": "Peterson"
//       }
//     }
//   ];

export default Factory.extend({
  id(i) { return `${i}`; },
  firstName: faker.list.cycle('Tom', 'Mark'),
  lastName: faker.list.cycle('Smith', 'Peterson')
});