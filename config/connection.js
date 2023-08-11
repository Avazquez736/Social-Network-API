// Import mongoose library
const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI ||  'mongodb://localhost:27017/social-network',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


module.exports = mongoose.connection
