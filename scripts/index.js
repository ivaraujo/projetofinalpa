const botao = document.querySelector("#botao");
let resp = document.querySelector("#resposta");
let quest = document.querySelector("#pergunta");
let msg = document.querySelector("#mensagem");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
sorteio = getRandomInt(5);

console.log(sorteio);
var pontos = 0;

sorteio = getRandomInt(5);


if(sorteio == 0){
    quest.innerHTML = "Qual o maior animal do mundo?";
}
if(sorteio == 1){
    quest.innerHTML = "Qual o nome da maior estado brasileiro?";
}
if(sorteio == 2){
    quest.innerHTML = "Serpente com chocalho?";
}
if(sorteio == 3){
    quest.innerHTML = "Qual o nome da marca nacional de carros brasileira?";
}
if(sorteio == 4){
    quest.innerHTML = "Nome da primeira capital do brasil?";
}
      


botao.addEventListener('click',function mensagem(){
    if(sorteio == 0){        
        
        if(resp.value == "baleia"){
            msg.innerHTML = "Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }
    if(sorteio == 1){        
        
        if(resp.value == "amazonas"){
            msg.innerHTML = "Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    } 
    if(sorteio == 2){        
        
        if(resp.value == "cascavel"){
            msg.innerHTML = "Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    } 
    if(sorteio == 3){        
        
        if(resp.value == "gurgel"){
            msg.innerHTML = "Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    } 
    if(sorteio == 4){        
        
        if(resp.value == "salvador"){
            msg.innerHTML = "Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  
});