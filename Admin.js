import User from './User.js';

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(curso, vagas){
        return `Curso de ${curso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Vitor', 'v@gmail.com', '2022-07-19');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JavaScript', 30));