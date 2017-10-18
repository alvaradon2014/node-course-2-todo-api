// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59e6dbcb3de358c3b8602f65')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59e6ce126f864c1796430725')
    }, {
      $set: {
        name: 'DAndrah'
      }, $inc: {
        age: 1
      }
    }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });


//  db.close();
});
