

function randomico(min, max){
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result; 
}

function totale(numero){
    if (numero % 2 ==0){
        return 1;
    }else{
        return 0;
    }}

    let somma = randomico(1, 5);

    let myInput = prompt('scegli tra pari o dispari');

    let number = prompt('scgli un numero tra 1 e 5');

    let sum = parseInt(somma) + parseInt(number);

    let finale = totale(sum);

    if (finale){
        console.log('ha vinto il numero dispari');
    }else{
        console.log('ha vinto il numero pari');
    }




