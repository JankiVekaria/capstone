const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let propertySchema = new Schema({
  dateCreated: {
    type: Date,
    default: Date.now
  },

  picture: {
    type: String,
    default: "https://venumfilestore.blob.core.windows.net/pub/00128c18/5f72/4cc0/a107/76272464f24a/$l/28.jpg"
  },

  index: {
    type: Number,
  },

  price: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  carSpaces: {
    type: Number,
    required: true
  },
  availableDate: {
    type: String,
    required: true
  },
  area: {
    type: Number
  },
  furnished: {
    type: String
  },
  agentName: {
    type: String,
    required: true
  },
  agentEmail: {
    type: String,
    required: true
  },
  agentPhone: {
    type: String,
    required: true
  },
  agentPhoto: {
    type: String,
    default: 'http://luxurybroker.ca/wp-content/uploads/2015/04/Roland-Kogan-Luxury-Real-Estate-Broker-agent.jpg'
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true,
    default: ['https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/lG8AAOSwTwtcfJvk/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/ikQAAOSwj61cfJwW/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/ke0AAOSw0RpcfJwc/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/XukAAOSwHOtcfJwh/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/Ax8AAOSwdvVcfJwo/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/rPEAAOSwCXRcfJwv/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/jQEAAOSw-RVcfJw1/$_59.JPG',
      'https://i.ebayimg.com/00/s/NTMzWDgwMA==/z/v6wAAOSwndBcfJw8/$_59.JPG']
  }
})



const PropertyModel = mongoose.model('propertyModel', propertySchema)
module.exports = PropertyModel;