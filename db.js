const mongoose = require('mongoose');


//Connecting the DataBase and Handling Errors
mongoose.connect('mongodb://localhost:27017/postManagerDB', { useNewUrlParser: true, useUnifiedTopology: true },
 (err) => {
  if (err) {
   console.log('Error Found : ' + JSON.stringify(err, undefined, 2));
  }
  else {
   console.log('Connection Succeeded');
  }

 });

