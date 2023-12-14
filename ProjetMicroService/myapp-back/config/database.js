const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://mongodbcont:27017/MS-User', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('Connected to db successfully...');
    } catch (error) {
        console.error('Error connecting to db:', error);
    }
}

module.exports = connectToDatabase;