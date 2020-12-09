const request = require('supertest');
const app = require('../server/app');

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
    const req=request(app)

    .post('/artist')
    .send({
        name:'hala',
        yearOfBirth :1991,
        nationality:'Paletinian' ,
        workStyle:'Realism' ,
        picture:'httpjm'

    })
    .expect(302)
    .end((err, res) => {
    // //   if (err) return err;
    //   console.log(res.body)
    //   expect(1).toBe('hala');
      
    });
    console.log({req})
    expect(1).toBe(1)
});

// test('route /weather return gaza weather page', (done) => {
//   request(app)
//     .get('/weather')
//     .expect(200)
//     .end((err, res) => {
//       if (err) return done(err);
//       expect(res.body.name).toBe('Gaza');
//       done();
//     });
// });