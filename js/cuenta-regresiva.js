const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos  = document.querySelector('#txtSegundos');

const h1 = document.querySelector('h1');

let intervalo = '';

function agregar0( numero ){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

function countdown(){
    const actual = new Date();
    const final = new Date(2023, 11, 8);

    let diferencia = final - actual;
    console.log(`segundos: ${diferencia}`);

    let segundos = Math.trunc(diferencia / 1000);
    console.log('Segundos = ' + segundos);

    let minutos = Math.trunc(segundos / 60);
    console.log(`minutos = ${minutos}`);

    let horas = Math.trunc(minutos / 60);
    console.log(`horas = ${horas}`);

    let dias = Math.trunc(horas / 24);
    console.log(`horas = ${dias}`);

    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;


    if( dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0){
        h1.innerText = 'Oferta Finalizada!';
        clearInterval( intervalo );
    }

    dias = agregar0(dias);
    horas = agregar0(horas);
    minutos = agregar0(minutos);
    segundos = agregar0(segundos);

    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

countdown();

intervalo = setInterval( countdown, 1000 );

