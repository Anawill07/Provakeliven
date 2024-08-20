
let usuarios = [];
function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || !email) {
        console.log("Preencha todos os campos.");
        return;
    }
    if (idade <= 0) {
        console.log("A idade deve ser maior que 0.");
        return;
    }
    usuarios.push({ nome: nome, idade: idade, email: email });
    console.log("Usuário adicionado.");
}
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
for (let i = 0; i < usuarios.length; i++ ) {
    console.log("Usuário " + (i + 1) + ":");
    console.log(" Nome: " + usuarios[i].nome);
    console.log(" Idade: " + usuarios[i].idade);
    console.log(" Email: " + usuarios[i].email);
}
}
adicionarUsuario("Ana", 16, "anawill@gmail.com");
adicionarUsuario("Kaua", 18, "kauasilva@gmail.com");
listarUsuarios();


