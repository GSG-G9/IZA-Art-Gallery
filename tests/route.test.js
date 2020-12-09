const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/config/connection')
const { dbBuild } = require("../server/database/config/build");

beforeEach(()=>{
    return dbBuild();
  })
  

// test('route /anything return 404html page', (done) => {
//   request(app)
//     .get('/hi')
//     .expect(404)
//     .end((err, res) => {
//       if (err) return done(err);
//       // eslint-disable-next-line no-console
//       console.log(res.body);
//       done();
//     });
// });
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

test('route /artist return gaza weather page', () => {
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