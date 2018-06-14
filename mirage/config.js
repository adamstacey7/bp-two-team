export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  const data = [
    {
      "type": "member",
      "id": "1",
      "attributes": {
        "first-name": "Tom",
        "last-name": "Smith"
      }
    },
    {
      "type": "member",
      "id": "2",
      "attributes": {
        "first-name": "Mark",
        "last-name": "Peterson"
      }
    }
  ];

  this.get('/members', () => ({
    data
  }));

  this.get('/members/:id', (sch, req) => ({
    data: data.filter(item => item.id === req.params.id)[0]
  }));

  this.get('/members/3', { message: 'Not Found' }, 404); 
}
