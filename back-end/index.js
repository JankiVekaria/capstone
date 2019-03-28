const express = require('express'),
  bodyParser = require('body-parser'),
  PORT = 8080,
  app = express(),
  // propertyData = require('./data/data'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  PropertyModel = require('./src/Models/propertySchema'),
  jwt = require('express-jwt'),
  jwks = require('jwks-rsa');

mongoose.connect('mongodb://localhost/capstoneDB');
let db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('We are connected');
});


//===============================

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://farzinj.auth0.com/.well-known/jwks.json"
//   }),
//   audience: 'http://rental-house.com',
//   issuer: "https://farzinj.auth0.com/",
//   algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

//=========================



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors())


app.get('/properties', (req, res) => {
  PropertyModel.find().limit(15)
    .then((allProperties) => {
      res.json(allProperties)
    }).catch((err) => {
      console.log(err);
    });
})

app.get('/properties/affordable', (req, res) => {
  PropertyModel.find().limit(20).sort({ 'price': 1 })
    .then((allProperties) => {
      res.json(allProperties)
    }).catch((err) => {
      console.log(err);
    });
})


//Find a specific property
app.get('/properties/:id', (req, res) => {
  const propId = req.params.id;

  PropertyModel.findById(propId)
    .then(oneProperty => {
      res.json(oneProperty)
    })
})


//Post a new property
app.post('/properties', (req, res) => {

  const newUpload = req.body;
  console.log(newUpload);

  PropertyModel.create(newUpload)
    .then((newProperty) => {
      res.send(newProperty)
    }).catch((err) => {
      console.log(err)
    });
})


app.post('/search', (req, res) => {
  const query = req.body;
  const city = query.city;
  const min = query.min || 0;
  const max = query.max || 10000;
  const bedrooms = query.bedrooms;

  console.log(query);


  PropertyModel.find({
    city: { $regex: '.*' + city + '.*' },
    price: { $gt: min - 1, $lt: max + 1 },
    bedrooms: bedrooms ? bedrooms : { $gt: Number(bedrooms) - 1 }
  })
    .then(foundProperties => {
      res.json(foundProperties)
    })
})

//Gets all data and group them by the location
app.get('/average', (req, res) => {

  PropertyModel.aggregate([
    { $match: {} },
    { $group: { _id: "$city", total: { $sum: "$price" }, count: { $sum: 1 } } }
  ]).sort({ _id: 1 })
    .then(data => {
      res.json(data)
    })
})


app.listen(PORT, () => {
  console.log('server is running at port ' + PORT)
})