import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },
  details: faker.list.cycle(
    'Digital Services at the Border Programme. responsible for; Developing the frontend client for AFTC ensuring a high standard of delivery is met, Advising client of best practice for the UX/UI of AFTC and collaborating with BA’s to flush out wireframes, Supporting test team when needed and advising approaches to improve regression pack, Optimising frontend efficiency by creating generic reusable AngularJS components and utilising his frontend knowledge to suggest and improve current functionality and tech debt.',
    'Working on a membership programme enhancing and developing the frontend assets working along side the clients frontend team.',
    'Working on project MetSearch, which is a project that implements multiple data sources within the public sector and lets officers on the street search across these data sources and the results to be displayed via desktop browser or iPad App. Responsibilities; Implement new designs into Markup, reskin application to new designs with CSS, work closely with client and designers to optimise mobile experience of application, gather requirements on how application behaves and ensure these requirements are met and signed off, build functionality of application with JavaScript and AngularJS'
  ),
  industry: faker.list.cycle(
    'Public Sector',
    'Wholesale and Retail',
    'Public Sector'
  )
});
