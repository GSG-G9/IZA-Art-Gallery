const { test } = require("@jest/globals");
const connection = require('../server/database/config/connection')
const { postArtist1 } = require("../server/database/queries/postArtist");
const {
  getArtist1,
  getArtistByName,
} = require("../server/database/queries/getArtist");
const { dbBuild } = require("../server/database/config/build");

beforeEach(()=>{
  return dbBuild();
})

test("jest is working", () => {
  expect(1).toBe(1);
});

test('getArtist ',()=>{
    return getArtist1()
    .then((data)=>{
        console.log(data.rowCount);
        expect(data.rowCount).toBe(2)
        expect(data.rows[1].name).toBe('Israa')
    })
    .catch(err =>{
        console.log(err+ ' test err')
    })
});

test('getArtistByName ',()=>{
  return getArtistByName('Israa')
  .then((data)=>{
      console.log(data.rowCount);
      expect(data.rowCount).toBe(1)
  })
  .catch(err =>{
      console.log(err+ ' test err')
  })
});

test('postArtist',()=>{
    return postArtist1({
        name:'hala',
        yearOfBirth :1991,
        nationality:'Paletinian' ,
        workStyle:'Realism' ,
        picture:'httpjm'

    })
    .then(({rows,rowCount})=>{
      expect(rowCount).toBe(1)

    })
})

afterAll(()=>{
    return connection.end();
})

