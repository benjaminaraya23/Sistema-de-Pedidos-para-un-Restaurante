const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Agrega esta línea para trabajar con rutas de archivos
const ordersRouter = require('./routes/orders');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Configura el middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use('/orders', ordersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
