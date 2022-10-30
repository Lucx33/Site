const apiUrl = "http://localhost:3000/contas"

const loBotao = document.getElementById("login")

const ccBotao = document.getElementById("criarConta")

console.log('alo')
/* ccBotao.addEventListener('click', () => {
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
}) */



loBotao.addEventListener('click', () => {
    function onlyLetters(str) {
        return /^[A-Za-z]*$/.test(str);
      }
    function onlyNumbers(str) {
        return /^[0-9]*$/.test(str);
      }
    var val = 0
    var valnome = 0
    var valmat = 0
    var valsenha = 0 
    var val1 = 0
    var val2 = 0
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const name = document.getElementById("namebox").value
    fetch("http://localhost:3000/contas",).then((response) => response.json()).then((data) => {
        for(i = 0; i < data.length; i++){
            matriculaexistente.style.display='none'
            if(username == data[i].username){
                matriculaexistente.style.display='flex'
                i = data.length
            }

            if(onlyLetters(String(name)) == true & name.length > 1){
                nameError.style.display="none"
                valnome = 1
                console.log(valnome)
                console.log('IF 1')
            }
            if(onlyLetters(String(name)) == false & name.length > 1){
                nameError.style.display="flex"
                valnome = 0
                console.log(valnome)
                console.log('IF 2')
            }
            if(name.length == 0){
                nameError.style.display="flex"
                valnome = 0
                console.log(valnome)
                console.log('IF 3')
            }
            if(username.length > 0 & onlyNumbers(String(username)) == true){
                matriculaError.style.display="none"
                valmat = 1
                console.log(valmat)
                console.log('IF 4')
            }
            if(username.length != 7){
                matriculaError.style.display="flex"
                valmat = 0
                console.log(valmat)
                console.log('IF 5')
            }
            if(password.length < 2){
                passwordError.style.display="flex"
                valsenha = 0
                console.log(valsenha)
                console.log('IF 6')
            }
            var j = 0
            while (j < password.length){
                console.log(valsenha)
                console.log('IF'+(j+1))
                character = password.charAt(j);
                console.log(character)
                if (!isNaN(character * 1)){
                    val1 += 1;
                }else if(isNaN(character * 1)==true){
                    if (character == character.toUpperCase()) {
                        val2 += 1;
                    }
                    if (character == character.toLowerCase()){
                        val2 += 0;
                    }
                }
                j++;
            }
            if(val2 > 0 & val1 > 0){
                passwordError.style.display="none"
                valsenha = 1
            }
            val = valsenha + valnome + valmat
            console.log('valor final de val ' + val)
        }
        if(val == 3){
            fetch("http://localhost:3000/contas", {
            method: 'POST', // or 'PUT'
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                "username": username,
                "password": password,
                "nome": name
            })
            }).then((response) => response.json()).then((data) => {
                console.log(data)
        })
        }
    })
})


