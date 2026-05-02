const express = require('express'); //
const app = express();
const PORT = 3000;

app.use(express.json()); // Para que Postman pueda enviar datos[cite: 1]

app.get('/', (req, res) => {
    res.send('API del Torneo de Fútbol - Felipe Alejandro');
});

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    if (usuario === 'felipe' && password === 'sena123') {
        res.status(200).json({ mensaje: '¡Login exitoso!' });
    } else {
        res.status(401).json({ mensaje: 'Usuario o clave incorrecta' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
