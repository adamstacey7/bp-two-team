import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },
  firstName: faker.list.cycle(
    'Adam',
    'Veronica',
    'Adam',
    'Nicolas',
    'Alexander',
    'Franklin',
    'Adam',
    'Maud',
    'Ezekiel',
    'Aidan',
    'Sara'
  ),
  lastName: faker.list.cycle(
    'Stacey',
    'Montalbetti',
    'Smith (Herbs)',
    'Bariatti',
    'Bourke',
    'Ike',
    'Burges (Adzz)',
    'Feldmann',
    'Anyanwu (Easy)',
    'Freeman',
    'Matthewman'
  ),
  profileImage: faker.list.cycle(
    'https://media.licdn.com/dms/image/C4E03AQFl05SkPZZu6A/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=EcCXxjVYcjbsR7qP6m7gHLxRZYQ-RfSTNuR4yyT2pB4',
    'https://media.licdn.com/dms/image/C4D03AQHq7dbNUQn08g/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=IKwVevuD5CcNqtEpNd4g5mLNUwNX_eLIjkEHOTs_h0k',
    'https://media.licdn.com/dms/image/C5103AQEJ6dsVmkVyvw/profile-displayphoto-shrink_200_200/0?e=1534982400&v=beta&t=xSr0txZcDcfXUMpBRna1tD7uTmIheGTNK0m0G4PBm6M',
    'https://media.licdn.com/dms/image/C4E03AQFYln9uPSQgqg/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=723Vj4UWugHqPvnL8OpsgZRHVtJ8NPMoMVlZXEHaVfA',
    'https://media.licdn.com/dms/image/C5103AQHPiGrRuwKwKw/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=3DEzj1wgFhdHRp_Mh76soQW77xUmlM4jUsSIprYnlUg',
    'https://avatars1.githubusercontent.com/u/17590959?s=460&v=4',
    'https://pbs.twimg.com/profile_images/695178427754745856/FfZUrr2f_400x400.png',
    'https://media.licdn.com/dms/image/C4E03AQGPnrtfwBp0-A/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=KqEE_Z3GSSXU_YRYLjc3fiAJX1-W2O97uyshog8aAtI',
    'https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png',
    'https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png',
    'https://media.licdn.com/dms/image/C4E03AQGrymTpeN3M5Q/profile-displayphoto-shrink_800_800/0?e=1536796800&v=beta&t=iDH7umQGzmIxyntRA9dPlvL5Wri5JxGkCsWDEdwDOWM'
  ),
  role: faker.list.cycle(
    'Tech Lead',
    'Product Owner',
    'Front End Developer',
    'Business Analyst',
    'Service Designer',
    'Back end Developer',
    'Interaction Designer',
    'Scrum Master',
    'Test Lead',
    'Front end Developer',
    'Back end Developer'
  )
});
