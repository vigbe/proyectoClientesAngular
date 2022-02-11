const express = require('express');
const { get } = require('express/lib/response');

const app = express();
const cors = require('cors');
const port = 3000;

let clientes = [
    { nombre: '', rut: '', direccion: '', localidad: '' }
]

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send(clientes);
})

app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`)
})

