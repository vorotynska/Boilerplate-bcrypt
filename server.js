'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
         console.log(hash)
         /*Store hash in your db*/
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res)//true
    /*res == true or false*/
  });
})


//END_ASYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash)
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result)
//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
