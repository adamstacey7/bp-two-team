export default function () {

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
      "type": "member",
      "id": "1",
      "attributes": {
        "first-name": "Tom",
        "last-name": "Smith",
      },
      "relationships": {
        "experiences": {
          "data": [
            {
              "type": "experience",
              "id": "1"
            },
            {
              "type": "experience",
              "id": "2"
            }          
          ]
        }
      },
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

  var experienceData = [
    {
      "type": "experience",
      "id": "1",
      "attributes": {
        "title": "Porche",
        "start-date": "1529061341148",
        "end-date": "1529061347803"
      }
    },
    {
      "type": "experience",
      "id": "2",
      "attributes": {
        "title": "Landrover",
        "start-date": "1529061341148",
        "end-date": "1529061347803"
      }
    }
  ];

  this.get('/experiences', () => ({
    data: experienceData
  }));

  this.get('/members', () => ({
    data: memberData
  }));

  this.get('/members/:id', (sch, req) => ({
    data: memberData.filter(item => item.id === req.params.id)[0]
  }));

  this.get('/experiences/:id', (sch, req) => ({
    data: experienceData.filter(item => item.id === req.params.id)[0]
  }));

  this.get('/members/3', { message: 'Not Found' }, 404); 

  // this.get('/members', (db) => db.members);
  // this.get('/members/:id', (db, req) => {
  //   const id = req.params.id;
  //   return db.members.find(id);
  // });

  // this.get('/experiences', (db) => db.experience);
  
  // this.get('/experiences/:id', (db, req) => {
  //   const id = req.params.id;
  //   return db.experiences.find(id);
  // });  
}
