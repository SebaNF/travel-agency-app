const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/travel_agency_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("🚀 We are making some connections here with the database!"))
    .catch((err) => console.log("Ohhhh, something went wrong", err));