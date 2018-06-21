export default (server) => {
  server.createList('member', 1, {
    experiences: server.createList('experience', 3),
    educations: server.createList('education', 2)
  });
}