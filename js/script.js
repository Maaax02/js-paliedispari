function palindroma(ask){
    let lenght = ask.length;
    
    for (i = 0; i < parseInt(lenght / 2); i++){
        if (ask[i] !== ask[lenght - 1 -i]){
            console.log('non è palindroma')
        }else{
            console.log('è palindroma')
        }
    }
} 
ask = prompt('Inserire una parola');
totale = palindroma(ask);



