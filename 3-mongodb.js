var MongoClient = require('mongodb').MongoClient;

async function run () {
  var connection = await MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true
  });
  var db = connection.db('awesome-js');
  var collection = db.collection('students');

  await collection.insertOne({
    name: 'John Doe',
    age: 19,
    sex: 'M'
  });

  // var found = await collection.findOne({
  //   name: 'John Doe'
  // });

  // if (found) {
  //   console.log('Found student', found.name, ', age', found.age, ', sex', found.sex);
  // } else {
  //   console.log('Didnt find the student you are looking for.');
  // }

  // await collection.updateOne({
  //   name: 'John Doe'
  // }, {
  //   $set: {
  //     age: 20
  //   }
  // });

  // await collection.deleteOne({
  //   name: 'John Doe'
  // });

  /**
   *
   */
  // var students = [{
  //   name: 'John Doe',
  //   age: 22,
  //   sex: 'M'
  // }, {
  //   name: 'Mike Stevens',
  //   age: 19,
  //   sex: 'M'
  // }, {
  //   name: 'Lara Jackson',
  //   age: 21,
  //   sex: 'F'
  // }];

  // await collection.insertMany(students);

  // var sorted = await collection.find({}).sort({
  //   age: 1
  // }).toArray();
  // console.log(sorted);

  // var limited = await collection.find({}).limit(2).toArray();
  // console.log(limited);

  // var byAge = await collection.find({
  //   age: {
  //     $lte: 20
  //   }
  // }).toArray();
  // console.log(byAge);

  await connection.close();
}

run().then(function () {
  console.log('script finished successfully.');
}).catch(function (err) {
  console.error(err);
});

