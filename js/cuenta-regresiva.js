//Ubicamos nuestros elementos dentro de DOM
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
    //creamos objetos de fechas
    const actual = new Date();
    const final = new Date(2023, 11, 8);
    /*const final = new Date(2023, 10, 27 , 16, 30 );*//* (Ano, mes, dia, hora, minutos) */
    /* Calculamos la diferencia
            expresado en milisegundos
    */

    let diferencia = final - actual;
    console.log(`segundos: ${diferencia}`);

    /*### Convertimos unidades de tiempo ###*/

    //obtenemos la diferencia expresada en segundos
    let segundos = Math.trunc(diferencia / 1000);//le saca los decimales
    console.log('Segundos = ' + segundos);
    //console.log(`segundos: ${segundos}`); //me muestra en la consola

    //obtenemos la diferencia expresada en minutos
    let minutos = Math.trunc(segundos / 60);
    console.log(`minutos = ${minutos}`);

    //obtenemos la diferencia expresada en horas
    let horas = Math.trunc(minutos / 60);
    console.log(`horas = ${horas}`);

    //obtenemos la diferencia expresada en dias
    let dias = Math.trunc(horas / 24);
    console.log(`horas = ${dias}`);


    /* calculamos los tiempos sobrantes */
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

    //Imprimos en los span
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//invocamos la funcion para testear
countdown();

//Actualizamos el llamado de la funcion

intervalo = setInterval( countdown, 1000 );//los 1000 actualiza 1 vez por segundos
//setInterval( call funcion, Delay );
