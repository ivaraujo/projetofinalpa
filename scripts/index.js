const botao = document.querySelector("#botao");
let resp = document.querySelector("#resposta");
let quest = document.querySelector("#pergunta");
let msg = document.querySelector("#mensagem");

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        const btn = document.querySelector("#botao");
        btn.click();
        mensagem();
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
sorteio = getRandomInt(10);

console.log(sorteio);
var pontos = 0;

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
if(sorteio == 5){
    quest.innerHTML = "Em que país se encontra a Grande Muralha?";
}
if(sorteio == 6){
    quest.innerHTML = "Qual planeta do Sistema Solar é conhecido como Planeta Vermelho?";
}
if(sorteio == 7){
    quest.innerHTML = "Qual é a capital da França?";
}
if(sorteio == 8){
    quest.innerHTML = "Em que continente fica o deserto do Saara?";
}
if(sorteio == 9){
    quest.innerHTML = "Qual é o nome da camada atmosférica que protege a Terra dos raios ultravioletas do sol?";
}

botao.addEventListener('click',function mensagem(){
    let respostaUsuario = resp.value.toLowerCase();
    if(sorteio == 0){        
        
        if(respostaUsuario == "baleia"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }
    if(sorteio == 1){        
        
        if(respostaUsuario == "amazonas"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    } 
    if(sorteio == 2){        
        
        if(respostaUsuario == "cascavel"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    } 
    if(sorteio == 3){        
        
        if(respostaUsuario == "gurgel"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    } 
    if(sorteio == 4){        
        
        if(respostaUsuario == "salvador"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  
    if(sorteio == 5){        
        
        if(respostaUsuario == "china"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  
    if(sorteio == 6){        
        
        if(respostaUsuario == "marte"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  
    if(sorteio == 7){        
        
        if(respostaUsuario == "paris"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  
    if(sorteio == 8){        
        
        if(respostaUsuario == "áfrica" || respostaUsuario == "africa"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  
    if(sorteio == 9){        
        
        if(respostaUsuario == "estratosfera"){
            msg.innerHTML = "Parabéns! Certa resposta!";             
        }
        else{
            msg.innerHTML = "Lamento, resposta incorreta!";
        }
    }  

});