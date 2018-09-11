const router = require('./app/routes/routes').router;
const express = require('express');
const app = express();

    app.use(router);
    
    app.listen(3000, () => {
        console.log('Example port 3000!');
    });