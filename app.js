// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del Número Secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsusario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    
    if(numeroDeUsusario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no certo
        if( numeroDeUsusario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
} 

function GenerarNumeroAleatorio(){
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon el numero maximo de numeros');
        
    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
        }
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroAleatorio();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();

