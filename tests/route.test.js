const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/config/connection')
const { dbBuild } = require("../server/database/config/build");

beforeEach(()=>{
    return dbBuild();
  })
  
test('router /artist testing ',()  => {
    return request(app)

    .post('/artist')
    .send({
        name:'hala',
        yearOfBirth :1991,
        nationality:'Paletinian' ,
        workStyle:'Realism' ,
        picture:'httpjm'

    })
    .expect(201)
    .then((response)=>{
        expect(response.body.rowCount).toBe(1)
    } );
   
});

test('route /artist ', () => {
  return request(app)
    .get('/artist')
    .expect(200)
    .then((res) => {
        console.log(res.body.length, 3)
        expect(res.body.length).toBe(2)
    });
});

afterAll(()=>{
    return connection.end();
})