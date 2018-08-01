export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/members', (db, req) => {
    if (
      Object.keys(req.queryParams).length !== 0 &&
      req.queryParams.constructor === Object
    ) {
      let filteredResults = db.members.all();

      Object.keys(req.queryParams).forEach(param => {
        filteredResults = filteredResults.filter(
          i =>
            i.attrs[param]
              .toLowerCase()
              .indexOf(req.queryParams[param].toLowerCase()) !== -1
        );
      });

      return filteredResults;
    }
    return db.members.all();
  });
  this.post('/members');

  this.get('/members/:id');
  this.patch('/members/:id');
  this.del('/members/:id');

  this.get('/educations');
  this.post('/educations');
  this.patch('/educations/:id');
  this.del('/educations/:id');

  this.get('/experiences');
  this.post('/experiences');
  this.patch('/experiences/:id');
  this.del('/experiences/:id');
}
