

const botaodark = document.getElementById('btndark')

botaodark.addEventListener('change',()=>{
    document.body.classList.toggle('darkmode')
})

fetch("http://localhost:3000/contas",).then((response) => response.json()).then((data) => {
    for(i = 0; i < data.length;i++){
        document.getElementById("amizades").innerHTML += ('<p>'+data[i].nome+'</p>')
    }
})
fetch("http://localhost:3000/restaurantes",).then((response) => response.json()).then((data) => {
    for(i = 0; i < data.length;i++){
        document.getElementById("restFav").innerHTML += ('<p>'+data[i].nome+'</p>')
    }
})

