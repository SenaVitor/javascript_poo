import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUsuario = new User('Vitor', "v@gmail.com", '2022-07-20');
console.log(novoUsuario.exibirInfos());