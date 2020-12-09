const { Pool } = require('pg');
require ('env2')('./config.env');

let dbUrl ='';
console.log(process.env.NODE_ENV)
switch(process.env.NODE_ENV){
  case 'production':
    dbUrl = process.env.DATABASE_URL;
    break;
  case 'development':
    dbUrl = process.env.DB_URL;
      break;   
  case 'test':
    dbUrl = process.env.TEST_DB_URL;
        break; 

  default :
   throw new Error('no data')
}
if (!dbUrl) throw new Error("No Database URL!!!");

const options = {
  connectionString : dbUrl,
  ssl: process.env.NODE_ENV === 'production'
};
console.log({options})
module.exports = new Pool(options);
