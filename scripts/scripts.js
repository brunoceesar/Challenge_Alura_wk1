let autenticarLogin = document.querySelector('.botaoEnviar');
let campoLogin = document.querySelector('.campoLoginEmail');
let campoSenha = document.querySelector('.campoLoginSenha');
let dadosInv = document.getElementById('spanLogin');
const login = "admin";
const senha = "admin";

// autenticarLogin.addEventListener("click", function() {
//     if (campoLogin.value == "admin@admin.com" && campoSenha.value == "admin") {
//         window.location.replace("produtos.html");
//     }else{
//         dadosInv.innerHTML = "Dados inválidos"
//     }
// })

autenticarLogin.addEventListener("click", function() {
    if (["admin@admin.com"].includes(campoLogin.value) && ["admin"].includes(campoSenha.value)) {
        window.location.replace("produtos.html");
    }else{
        dadosInv.innerHTML = "Dados inválidos"
    }
})

