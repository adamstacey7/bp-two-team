export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/members', () => {
    return {
      "data": [
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
      ]
    };
  });

  this.get('/members/1', () => {
    return {
      "data": {
        "type": "member",
        "id": "1",
        "attributes": {
          "first-name": "Tom",
          "last-name": "Smith"
        }
      }
    };
  });
}
