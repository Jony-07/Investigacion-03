const express = require('express');
const morgan = require('morgan');
const app = express();

//Configuraciones - servidor
app.set('port', process.env.PORT || 3000);


// middlewares o servicios
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas


//Iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});