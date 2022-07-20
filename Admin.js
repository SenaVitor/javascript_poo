import User from './User.js';

class Admin extends User{
    constructor(nome, email, nascimento, role, ativo = true){
        super(nome, email, nascimento, role, ativo);
    }
}

const novoAdmin = new Admin('Vitor', 'v@gmail.com', '2022-07-19');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());