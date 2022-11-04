const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log('Server running on Port 5000');
});

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.use((req, res) => {
    res.status(404).render('error', { title: 'Error' });
});