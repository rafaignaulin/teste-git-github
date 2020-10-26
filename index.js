const express = require('express');

const app = express()

applicationCache.get('/teste',(req, res) => {
    return res.json({hello: 'world'})
});

app.listen(3333);