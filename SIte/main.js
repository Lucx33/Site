const apiUrl = "http://localhost:3000/contas"

const loBotao = document.getElementById("login")

const ccBotao = document.getElementById("criarConta")


ccBotao.addEventListener('click', () => {
    const Conta = document.getElementById("username").value
    const Senha = document.getElementById("password").value
    fetch("http://localhost:3000/contas", {
        method: 'POST', // or 'PUT'
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            "username": Conta,
            "password": Senha
        })
    }).then((response) => response.json()).then((data) => {
        console.log(data)
    })
})

loBotao.addEventListener('click', () => {
    const username = document.getElementById("username").value
    if(username.length != 7){
        matriculaError.style.display="flex"
    }
    const password = document.getElementById("password").value
    fetch("http://localhost:3000/contas",).then((response) => response.json()).then((data) => {
        for(i = 0; i < data.length; i++){
            if(username.length != 7){
                matriculaError.style.display="flex"
            }
            else if(username == data[i].username && password == data[i].password){
                location. href="configurações.html"
                
            } 
            else{
                loginError.style.display="flex"
            }
        }
        console.log(data)
    })
})





/* async function getApi(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    return data
}

getApi().then((data) => {
    console.log(data)
})

console.log(arqJson)

var objPeople = [
    {
        username:"2210831",
        password:"123"
    }
]

console.log(valor)

var erou = document.getElementById("loginError");

function getInfo(x){
    var data = x
    console.log(data)
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0; i < data.length; i++){
        if(username == data[i].username && password == data[i].password){
            location. href="configurações.html"
        } 
        else{
            erou.style.display="flex"
        }
    }
}



fetch("http://localhost:3000/avaliacoes", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "id_conta": 1,
        "id_retaurante": 2,
        "valor": 3,
        "comentario": "Muito ruim!"
    }),
}).then((response) => response.json()).then((data) => {

})

const botao = document.getElementById("botao-comentario")
botao.addEventListener('click', () => {
    // fazer o post para adicionar uma nova avaliacao
    
})
 */


