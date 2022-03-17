const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
let contador = 0;
const usuarios = [
  {
    id: contador,
    name: "milenascript",
    email: "milenascript@hotmail.com",
    password: "holamundo",
  },
];

app.get("/", (req, res) => {
  res.json({
    state: "working",
  });
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});
app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find((u) => u.id === id);
  if (usuario) return res.json(usuario);
  res.json({ msg: "usuario no encontrado" });
});

app.post("/usuarios", (req, res) => {
  contador++;
  const { name, email, password } = req.body;
  const usuario = usuarios.find((u) => u.email === email);
  if (usuario) return res.json({ msg: "correo ya esta registrado", token: false });  
  usuarios.push({ id: contador, name, email, password });
  res.json({msg:`usuario ${name} registrado`});
});

app.post("/usuarios/login", (req, res) => {
  const { email = "", password = "" } = req.body;
  const usuario = usuarios.find((u) => u.email === email);
  if (!usuario) return res.json({ msg: "correo invalido", token: false });
  if (usuario?.password !== password)
    return res.json({ msg: "credenciales invalidas", token: false });
  res.json({ msg: "Bienvenido/a "+usuario.name, token: true });
});

const port = process.env.PORT || 1119;

app.listen(port, () => console.log(`App listening on port ${port}`));
