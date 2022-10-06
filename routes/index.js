var express = require('express');
const { ObjectId } = require('mongodb');
var router = express.Router();
var livres = require('../data.json').sort((a,b) => b.year - a.year)
const{ MongoClient } = require('mongodb')
const uri = "mongodb://cznini:*****@localhost:27017/?maxPoolSize=20&w=majority"

const client = new MongoClient(uri)


async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// const uri = "mongodb+srv://cznini:*****@estiam-fullstack.f9upgf5.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(uri)

// const cnx = mongoose.connection

// cnx
//   .on('open', () => console.log('mongoose connected'))
//   .on('close', () => console.log('mongoose disconnected'))
//   .on('error', err => console.log(err))

// const { model, Schema } = mongoose

// const LivreSchema = new Schema({
//   author: String,
//   country: String,
//   imageLink: String,
//   language: String,
//   link: String,
//   pages: Number,
//   title: String,
//   year: Number
// })

// const Livre = model('Livre', LivreSchema, 'livres')

// PAGE : accueil
// Liste tous les livres présents dans le fichier data.json
// trié par année et dans l'ordre décroissant.
router.get('/', async function(req, res) {
  

  const livresCollection = client.db('bookshelf').find()

  console.log()

  // const dbLivres = await Livre.find({})

  // console.log(JSON.parse(dbLivres))

  res.render('index', { 
    title: 'The 100 Best Books',
    livres: livres
  });
});

// PAGE : détail
// On y retrouve les détails d'un livre dont l'id est récupérable depuis l'URL.
router.get('/:id', function(req, res) {
  var livre = livres[req.params.id - 1]

  res.render('details', { 
    livre: livre
  });
})

module.exports = router;
