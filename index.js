const express = require('express');
const app = express();
const port = 8000;
app.use(express.static('public'));

// ROUTES 




// RUN SERVER
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
  