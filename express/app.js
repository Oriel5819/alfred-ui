const express = require('express');
const path = require('path');

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// vue
// app.use('/assets', express.static('../alfred-vue/dist'));

// angular
// app.use(express.static(path.join(__dirname, '../alfred-angular/dist/angular-ui/browser')));

// react
app.use('/assets', express.static('../alfred-react/build/static'));

app.get('/', (req, res) => {
	try {
		res.render('index-react');
	} catch (error) {
		res.render('error');
	}
});

app.listen(port, () => { console.log('App is running in port', port) });