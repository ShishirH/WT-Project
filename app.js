

/* jshint esversion: 6 */

let express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
app.use('/scripts', express.static('scripts'));
app.get('/', (req, res) => {
    res.render('Homepage');
});

app.get('/login', (req, res) => {
    res.render('login');
});


app.get('/Homepage', (req, res) => {
    res.render('Homepage');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/questions', (req, res) => {
    res.render('questions');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/assignments', (req, res) => {
    res.render('assignments');
});

app.get('/IT', (req, res) => {
    res.render('IT');
});

app.get('/newpage', (req, res) => {
    res.render('newpage');
});

app.get('/loading', (req, res) => {
    res.render('loading');
});

app.get('/newIT', (req, res) => {
    res.render('newIT');
});

app.get('/quiz', (req, res) => {
    res.render('quiz');
});

app.get('/WTQuiz', (req, res) => {
    res.render('WTQuiz');
});

app.get('/notes', (req, res) => {
    res.render('notes');
});


app.listen(3000);
