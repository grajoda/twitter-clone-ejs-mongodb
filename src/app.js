require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const multer = require('multer');

const db = require('./config/database');

const app = express();
const path = require('path');


// Define o caminho completo para a pasta views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use("/public",express.static("../public")); 
app.use(bodyParser.urlencoded({extended: false}));


const upload = multer({ dest: 'uploads/' })
app.use(upload.single('file'));


const cookieConfig = require('./config/cookieConfig');
app.use(session(cookieConfig));

app.use(passport.initialize());
app.use(passport.session());


const Routes = require('./routes/routes');
app.use('/', Routes);

// PORT
const PORT = process.env.PORT
app.listen(PORT);
console.log(`server online on port ${(PORT)}, My lord`);