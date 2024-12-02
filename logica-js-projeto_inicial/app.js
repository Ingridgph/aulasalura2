alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 10;
console.log(numeroSecreto);
let chute 

while(numeroSecreto != chute){
    chute = prompt('Escolha um numero de 1 a 10')
    if (numeroSecreto == chute){
        alert(`Isso aí você descobriu o número secreto: ${numeroSecreto}`);
    }
    else {
        if(numeroSecreto > chute){
            alert('O número secreto é maior do que ' + chute)
        }
        else{
            alert('O número secreto é menor que '+ chute)
        }
    }
}
