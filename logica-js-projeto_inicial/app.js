alert('Boas vindas ao jogo do número secreto');
let numeroMaximo= 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas=1;

while(numeroSecreto != chute){
    chute = prompt('Escolha um numero de 1 a '+numeroMaximo);
    if (numeroSecreto == chute){
        break;
    }
    else {
        if(numeroSecreto > chute){
            alert('O número secreto é maior do que ' + chute);
        }
        else{
            alert('O número secreto é menor que '+ chute);
        }
         //tentativas = tentativas + 1;
         tentativas++;
    }

}
let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
alert('Isso aí você descobriu o número secreto: '+ numeroSecreto +' com o total de '+ tentativas+' '+palavraTentativa);
