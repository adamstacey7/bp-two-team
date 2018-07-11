export default function(server) {
  server.createList('member', 11, {
    experiences: server.createList('experience', 2),
    educations: server.createList('education', 2)
  });
}
