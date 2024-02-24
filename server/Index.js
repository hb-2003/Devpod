const express = require('express');
const app = express();
const port = 4000;
require('./config/db').connect();
const route = require('./routes/index');
app.use('/api', route);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log('Server started');

