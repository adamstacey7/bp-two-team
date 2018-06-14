export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // this.get('/header-titles/coreTeam', () => {
  //   return { data: [], title: 'Team Overview' };
  // });

  this.get('/core-team-members', () => {
    return {
      data: [],
      '-dsanldsajkldsa': {
        basicDetails: {
          firstName: 'Adam',
          lastName: 'Stacey',
          fullName: 'Adam Stacey',
          role: 'Tech Lead',
          profileImage: '',
          bio:
            'Adam is an IT professional passionate about front end development and . He has experience in all areas of the SDLC (Software Development Life Cycle) and excellent technical skills. He is a driven individual with a wide breadth of knowledge and a thirst for learning. He has been responsible for the development and maturity of software engineering process of front end development teams, and has a keen understanding of responsive design principles, is experienced in using Functional and Unit Testing methods. He is proficient in HTML5, CSS 3, JavaScript, AJAX and well versed with modern JavaScript libraries such as ReactJS and AngularJS. He also has experience of leading teams both onshore and offshore, but equally comfortable working on my own initiative or being part of a productive team.'
        },
        skills: [
          'Frontend web development',
          'Webapplication development ',
          'Git',
          'Agile(Scrum | Kanban)',
          'Excellentproject practices '
        ],
        technologies: [
          'ReactJS',
          'Redux',
          'AngularJS ',
          'CordovaPhonegap ',
          'HTMLCSS / JavaScript '
        ],
        industries: [
          'PublicSector ',
          'Automotive',
          'Wholesale & Retail ',
          'Travel',
          'MassMedia'
        ],
        education: [
          {
            title: 'Digital Technology Solutions',
            location: 'Aston University',
            start: '2015',
            end: '2018',
            grade: '2:1'
          },
          {
            title: 'IT for professionals',
            location: 'QA',
            start: '2012',
            end: '2015',
            grade: 'Level 4'
          },
          {
            title:
              'Btec National Diploma in IT Practitioners (Software Development)',
            location: 'Coulsdon College',
            start: '2009',
            end: '2011',
            grade: 'DMM'
          }
        ],
        professionalExperience: [
          {
            industry: 'Public Sector',
            details:
              'Digital Services at the Border Programme. responsible for; Developing the frontend client for AFTC ensuring a high standard of delivery is met, Advising client of best practice for the UX/UI of AFTC and collaborating with BA’s to flush out wireframes, Supporting test team when needed and advising approaches to improve regression pack, Optimising frontend efficiency by creating generic reusable AngularJS components and utilising his frontend knowledge to suggest and improve current functionality and tech debt.'
          },
          {
            industry: 'Automotive',
            details:
              'Working on STA project involved with digitalising internal quality and supplier assurance paper processes into 3 web application with offline capabilities. Working with offshore, ReactJS and SQLite for offline capabilities enhancement on devices.'
          },
          {
            industry: 'Wholesale and Retail',
            details:
              'Working on a membership programme enhancing and developing the frontend assets working along side the clients frontend team.'
          },
          {
            industry: 'Public Sector',
            details:
              'Working on project MetSearch, which is a project that implements multiple data sources within the public sector and lets officers on the street search across these data sources and the results to be displayed via desktop browser or iPad App. Responsibilities; Implement new designs into Markup, reskin application to new designs with CSS, work closely with client and designers to optimise mobile experience of application, gather requirements on how application behaves and ensure these requirements are met and signed off, build functionality of application with JavaScript and AngularJS'
          }
        ]
      }
    };
  });
}
