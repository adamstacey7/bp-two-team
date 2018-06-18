export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  const memberData = [
    {
      type: 'member',
      id: '1',
      attributes: {
        bio:
          'Adam is an IT professional passionate about front end development and . He has experience in all areas of the SDLC (Software Development Life Cycle) and excellent technical skills. He is a driven individual with a wide breadth of knowledge and a thirst for learning. He has been responsible for the development and maturity of software engineering process of front end development teams, and has a keen understanding of responsive design principles, is experienced in using Functional and Unit Testing methods. He is proficient in HTML5, CSS 3, JavaScript, AJAX and well versed with modern JavaScript libraries such as ReactJS and AngularJS. He also has experience of leading teams both onshore and offshore, but equally comfortable working on my own initiative or being part of a productive team.',
        'first-name': 'Adam',
        'full-name': 'Adam Stacey',
        'last-name': 'Stacey',
        'profile-image': 'adam-stacey.jpeg',
        role: 'Tech Lead',
        industries: [
          'Public Sector',
          'Automotive',
          'Wholesale & Retail ',
          'Travel',
          'Mass Media'
        ],
        skills: [
          'Frontend web development',
          'Web application development',
          'Git',
          'Agile (Scrum | Kanban)',
          'Excellent project practices'
        ],
        technologies: [
          'ReactJS',
          'Redux',
          'AngularJS ',
          'Cordova/Phonegap ',
          'HTML/CSS/JavaScript'
        ]
      },
      relationships: {
        'professional-experience': {
          data: [
            {
              type: 'professional-experience',
              id: '1'
            },
            {
              type: 'professional-experience',
              id: '2'
            },
            {
              type: 'professional-experience',
              id: '3'
            }
          ]
        },
        education: {
          data: [
            {
              type: 'education',
              id: '1'
            },
            {
              type: 'education',
              id: '2'
            },
            {
              type: 'education',
              id: '3'
            }
          ]
        }
      }
    }
  ];

  const experienceData = [
    {
      type: 'professional-experience',
      id: '1',
      attributes: {
        details:
          'Digital Services at the Border Programme. responsible for; Developing the frontend client for AFTC ensuring a high standard of delivery is met, Advising client of best practice for the UX/UI of AFTC and collaborating with BA’s to flush out wireframes, Supporting test team when needed and advising approaches to improve regression pack, Optimising frontend efficiency by creating generic reusable AngularJS components and utilising his frontend knowledge to suggest and improve current functionality and tech debt.',
        industry: 'Public Sector'
      }
    },
    {
      type: 'professional-experience',
      id: '2',
      attributes: {
        details:
          'Working on a membership programme enhancing and developing the frontend assets working along side the clients frontend team.',
        industry: 'Wholesale and Retail'
      }
    },
    {
      type: 'professional-experience',
      id: '3',
      attributes: {
        details:
          'Working on project MetSearch, which is a project that implements multiple data sources within the public sector and lets officers on the street search across these data sources and the results to be displayed via desktop browser or iPad App. Responsibilities; Implement new designs into Markup, reskin application to new designs with CSS, work closely with client and designers to optimise mobile experience of application, gather requirements on how application behaves and ensure these requirements are met and signed off, build functionality of application with JavaScript and AngularJS',
        industry: 'Public Sector'
      }
    }
  ];

  const educationData = [
    {
      type: 'education',
      id: '1',
      attributes: {
        end: '2018',
        grade: '2:1',
        location: 'Aston University',
        start: '2015',
        title: 'Digital Technology Solutions'
      }
    },
    {
      type: 'education',
      id: '2',
      attributes: {
        end: '2015',
        grade: 'Level 4',
        location: 'QA',
        start: '2012',
        title: 'IT for professionals'
      }
    },
    {
      type: 'education',
      id: '3',
      attributes: {
        end: '2011',
        grade: 'DMM',
        location: 'Coulsdon College',
        start: '2009',
        title:
          'Btec National Diploma in IT Practitioners (Software Development)'
      }
    }
  ];

  this.get('/members', () => ({
    data: memberData
  }));

  this.get('/members/:id', (sch, req) => ({
    data: memberData.filter(item => item.id === req.params.id)[0]
  }));

  this.get('/members/3', { message: 'Not Found' }, 404);

  this.get('/experiences', () => ({
    data: experienceData
  }));

  this.get('/experiences/:id', (sch, req) => ({
    data: experienceData.filter(item => item.id === req.params.id)[0]
  }));

  this.get('/educations', () => ({
    data: educationData
  }));

  this.get('/educations/:id', (sch, req) => ({
    data: educationData.filter(item => item.id === req.params.id)[0]
  }));
}
