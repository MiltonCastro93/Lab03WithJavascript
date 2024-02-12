//Ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

function ocultar(){
    //caja.style.opacity = 0; //Opcion N1
    //caja.style.visibility = 'hidden'; //Opcion N2
    caja.style.display = 'none'; //Opcion N3
}

function mostrar(){
    //caja.style.opacity = 1; //Opcion N1
    //caja.style.visibility = 'visible'; //Opcion N2
    caja.style.display = 'block'; //Opcion N3
}
/* esta funcion esta en "mostrar-ocultar2.js"

function mostrarOcultar(){
    //Si la caja se ve
    if(caja.style.display == 'block'){
        //ocultamos la caja
        ocultar();
    }else{
        //mostramos la caja
        mostrar();
    }
}

*/