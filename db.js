const mongoose = require('mongoose');
// const uri = 'mongodb+srv://cznini:*****@estiam-fullstack.f9upgf5.mongodb.net/test';


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cznini:******@estiam-fullstack.f9upgf5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


mongoose.connect(uri, {
    useNewUrlParser: true
});

module.exports = mongoose