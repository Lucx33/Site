






//É só ver no json qual o id do restaurante e trocar no lugar do 0
fetch("http://localhost:3000/restaurantes",).then((response) => response.json()).then((data) => {
    document.getElementById("nome").innerHTML += (data[5].nome)
    document.getElementById("horarios").innerHTML += (data[5].horario)
    document.getElementById("loc").innerHTML += (data[5].localizacao)
    document.getElementById("comida").innerHTML += (data[5].tipoEspec)
    /* document.getElementById("preco").innerHTML += (data[0].faixaValores) */
    
})

var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar .addEventListener('click',function(){
    if(iconMenu.getAttribute("src") == '/img/menu.png'){
        iconMenu.setAttribute("src","/img/close.png");
    }
    else{
        iconMenu.setAttribute("src","/img/menu.png");
    }
    menu.classList.toggle('active');
})


function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    //Trocar caminho da imagem para o restaurante atual
    url = url.split("BarraquinhaWrap.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "/img/star0.png") {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star1.png";
    document.getElementById("s4").src = "/img/star1.png";
    document.getElementById("s5").src = "/img/star1.png";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star1.png";
    document.getElementById("s4").src = "/img/star1.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 4;
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "/img/star0.png") {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star1.png";
    document.getElementById("s4").src = "/img/star1.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star1.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 3;
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "/img/star0.png") {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star1.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star0.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 2;
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "/img/star0.png") {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star1.png";
    document.getElementById("s3").src = "/img/star0.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star0.png";
    document.getElementById("s3").src = "/img/star0.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 1;
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "/img/star0.png") {
    document.getElementById("s1").src = "/img/star1.png";
    document.getElementById("s2").src = "/img/star0.png";
    document.getElementById("s3").src = "/img/star0.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "/img/star0.png";
    document.getElementById("s2").src = "/img/star0.png";
    document.getElementById("s3").src = "/img/star0.png";
    document.getElementById("s4").src = "/img/star0.png";
    document.getElementById("s5").src = "/img/star0.png";
    avaliacao = 0;
   }}
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }

   //Trocar o caminho para o restaurante 
   const api_url = "http://localhost:3000/Restaurantes/"




   async function getApi(){
       const response = await fetch(api_url);
       const data = await response.json();
       console.log(data);
       return data
   }
   
   getApi().then((data) => {
       console.log(data)
   })
   
   let objPeople = [
       {
           username:"2210831",
           password:"123"
       }
   ]
   
   
   let erou = document.getElementById("loginError");
   
   function getInfo(x){
       let data = x
       console.log(data)
       let username = document.getElementById("username").value
       let password = document.getElementById("password").value
       for(i = 0; i < data.length; i++){
           if(username == data[i].username && password == data[i].password){
               location. href="configurações.html"
           } 
           else{
               erou.style.display="flex"
           }
       }
   }
   
   
   
   const botao = document.getElementById("enviar")
   console.log(botao)
   botao.addEventListener('click', () => {
       const data = document.getElementById("comentario").value
        //Trocar o caminho para o restaurante
       fetch("http://localhost:3000/BarraquinhaSalgados", {
           method: 'POST', // or 'PUT'
           headers:{'Content-Type':'application/json'},
           body: JSON.stringify({
               "comentario": data,
               "avaliação": avaliacao
           })
       }).then((response) => response.json()).then((data) => {
           console.log(data)
       })
   })