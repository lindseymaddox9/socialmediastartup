
// * `GET` a single user by its `_id` and populated thought and friend data
                                           //I don't understand this


const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = 'user';

// Use connect method to connect to the mongo server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Use client.db() constructor to add new db instance
    db = client.db(dbName);

    // Start up express server
    app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// Built in Express function that parses incoming requests to JSON
app.use(express.json());


// **`/api/users`**



// * `GET` all users
// Get request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.user('friends')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find({})
    // Returns all the documents in an array
    .toArray()
    // Sends results
    .then(results => res.json(results))
    // Handles error
    .catch(err => {
      if (err) throw err;
    });
});




// Post request to create a single document to collection
app.post('/create', (req, res) => {
  // collection() creates or selects instance of collection. Takes in collection name
  // insertOne() inserts single document into collection. Takes in object.
  db.friends('friends').insertOne(
    { username: req.body.username, email: req.body.email }
  )
    // Sends results
    .then(results => res.json(results))
    // Handles error
    .catch(err => {
      if (err) throw err;
    });
});




// Post request to add multiple document to collection
app.post('/create-many', (req, res) => {
  db.User('friends').insertMany(
    [
      { "title": "Hally" },
      { "title": "Alexis" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});


// * `POST` a new user:
// Post request to create a single document to collection
app.post('/create', (req, res) => {
  // collection() creates or selects instance of collection. Takes in collection name
  // insertOne() inserts single document into collection. Takes in object.
  db.friends('over30').insertOne(
    // { kids: req.body.kids, numberofkids: req.body.numberofkids }//CONFUSED HERE
  )
    // Sends results
    .then(results => res.json(results))
    // Handles error
    .catch(err => {
      if (err) throw err;
    });
});

// Post request to add multiple document to collection
app.post('/create-many', (req, res) => {
  db.User('friends').insertMany(
    [
      { "user": "username" },
      { "email": "email address" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});



// TODO: Add Delete route that uses a filter object to delete a single document by id

app.delete('/delete', async (req, res) => {
  try {
  //   const results = awaitdb.User('friends').deleteOne({
  //   _id: new ObjectId(req.body._id)
  // }); i'm confused here but i know i need to remove thoughts

  res.json (results);
} catch (err) {
throw (err);
}
});

///still need friend count thatretrieves the length of the user's `friends` array field on query.