

/* jshint esversion: 6 */

let express = require('express');

let app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Homepage');
})

app.listen(3000);
