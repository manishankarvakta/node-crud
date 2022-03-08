const mongoose = require('mongoose');

const URI = 'mongodb+srv://evilrider:Pass123@cluster0.lcxsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true });
    console.log('db connected...!')
}

module.exports = connectDB;