const user = {
    nome: "Vitor",
    email: "v@gmail.com",
    nascimento: "2022/06/30",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Maria",
    email: "m@gmail.com",
    nascimento: "2002/07/31",
    role: "admin",
    criarCurso(){
        console.log('curso criado!');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();