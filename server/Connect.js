//mongo db connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DUHacks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

