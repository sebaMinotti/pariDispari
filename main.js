
//PARTE DEDICATA ALLE FUNZIONI DEL PROGRAMMA

/*
funzione che genera un numero random da un minimo ad un massimo
*/
function random(min, max){

    return Math.floor(Math.random()*(min, max)+min)
}

/*
funzione che verifica se un numero è pari
*/
function pari(numero) {
    if(numero % 2 ==0){

        return true
    } else {
        return false
    }
}

/*
funzione che verifica se un numero è dispari
*/
function dispari(numero){
    if(numero % 2 !=0){

        return true
    } else {
        return false
    }
}


function valutaVincitore(somma, scelta) {

    if((scelta=='dispari'&& dispari(somma)) || (scelta=='pari' && pari(somma) )){

        return  'utente'
    } else {
        return 'pc'
    }
    
}

//PARTE DI LOGICA DEL PROGRAMMA



let gioca = document.querySelector('#game')
gioca.addEventListener('click',function(){

let sceltaOpzioneUmano = document.querySelector('#PariDispari').value;
document.querySelector('#SceltaOpzione').innerHTML=sceltaOpzioneUmano


let sceltaNumeroUmano = parseInt( document.querySelector('#numberUman').value )
document.querySelector('#sceltaNumeroUmano').innerHTML=sceltaNumeroUmano

    
let numeroPc = random(1,6);

document.querySelector('#sceltaNumeroPc').innerHTML=numeroPc

let somma = sceltaNumeroUmano+numeroPc
document.querySelector('#sommaNumeri').innerHTML=somma

let valutazione = valutaVincitore(somma, sceltaOpzioneUmano);

if(valutazione==='utente'){
    document.querySelector('#vittoria').innerHTML=`complimenti umano ! Hai vinto, la  somma è  ${somma} ed hai  hai scelto ${sceltaOpzioneUmano} tra pari e dispari  `
} else if( valutazione ==='pc'){
    document.querySelector('#vittoria').innerHTML=`Mi spiace umano ! Hai perso la somma  dei numeri è ${somma} ed hai scelto ${sceltaOpzioneUmano} tra pari e dispari  `
}
    
})