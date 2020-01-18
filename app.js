const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');
require('./api/middlewares/passportJWTConfig')(passport);

// const passport = require('passport');
// const sequelize = require('./models/database-connection');
// require('./api/middlewares/passortJWTConfig')(passport);
const helmet = require('helmet');
const http = require('http');
const router = require('./api/routes/router');
// const scriptRunner = require('./api/scripts/scriptRunner');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});



// ! --------------------------- MIDDLEWARES ---------------------------------------
app.use(passport.initialize());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(limiter);
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use('/public', express.static(__dirname + '/public'));

// ? ---------------------- ROUTES ------------------------------

app.use('/api', router);

// ! ----------------------------------Database Sync--------------------------------
// require('./api/models/databaseRelations');

//* for just creating the database
// sequelize.sync({
//     alter: true
// });

// scriptRunner.runAllScripts()

//* For deleting database and creating again!

// sequelize.sync({
// 	force: true
// });

const port = process.env.PORT || config.get('app.webServer.port');

const server = http.createServer(app);

server.listen(port);

module.exports = app;