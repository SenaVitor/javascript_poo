import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUsuario = new User('Vitor', "v@gmail.com", '2022-07-20');
console.log(novoUsuario.exibirInfos());

const novoAdmin = new User('Rodrigo', "r@gmail.com", '2021-04-10');
console.log(novoAdmin.nome);
novoAdmin.nome = '';
console.log(novoAdmin.nome);