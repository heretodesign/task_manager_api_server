 //connect to the db
 const { MongoClient, ObjectID } = require('mongodb')

//  const mongodb = require('mongodb')
//  const MongoClient = mongodb.MongoClient
//  const ObjectID = mongodb.ObjectID

 
 const connectionURL = 'mongodb://127.0.0.1:27017'
 const databaseName = 'taskmanager'

//  const id = new ObjectID()
//  console.log(id.id.length);
//  console.log(id.toHexString().length);
 
 MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
     if (error) {
         return console.log("unable to connect to the database!");
     }
 
     console.log('Connected Correctly')
     const db = client.db(databaseName)
 
     //database seed one user
    //  db.collection('users').insertOne({
    //      name: 'abel',
    //      age: 22,
      //      email: "abel@sustia.com"
    //  }, (error, result) => {
    //      if (error) {
    //          return console.log("unable to insert user!");
    //      }
 
    //      console.log(result.ops)
    //  })

     // db seed many users
    // db.collection('users').insertMany([
    //     {
    //         name: "alexa",
    //         age: 29,
    //         email: "alexa@gmail.com"
    //     }, {
    //         name: "john",
    //         age: 23,
    //         email: "john@supahands.com"
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("unable to insert document!")
    //     }
    //     console.log(result.ops)
    // })

     // db seed many tasks
    // db.collection('tasks').insertMany([
    //     {
    //         description: "Clean the house",
    //         completed: true,
    //     }, {
    //         description: "study for the English test",
    //         completed: true,
    //     }, {
    //         description: "code nodejs",
    //         completed: false,
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("unable to insert document!")
    //     }
    //     console.log(result.ops)
    // })


    // CRUD
    // db.collection('users').findOne({ name: 'john'}, (error, user) => {
    // db.collection('users').findOne({ _id: new ObjectID("5f6ae59a4c79723a11d0fd08") }, (error, user) => {
    //     if (error) {
    //         return console.log("unable to fetch")
    //     }
    //     console.log(user)
    // });

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {

    // })
    
    // db.collection('users').find({ age: 22 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log("unable to fetch")
    //     }
    //     console.log(users)
    // })

     // edit // update
    // const updatePromise = db.collection('users').updateOne({ 
    //     _id: new ObjectID("5f6ae59a4c79723a11d0fd08")
    // }, {
    //     $set: {
    //         name: "Mike"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

     // edit // update tasks
    // const updatePromise = db.collection('tasks').updateMany({ 
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete users
    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete 
    // db.collection('tasks').deleteOne({
    //     description: "code nodejs"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
 })
 