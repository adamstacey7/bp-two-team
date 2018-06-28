export default function(server) {
  console.log(server.createList('education', 2));
  server.createList('member', 3, {
    experiences: server.createList('experience', 2),
    educations: server.createList('education', 2)
  });
}
