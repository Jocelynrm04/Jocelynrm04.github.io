//creo una funcion que se ejecutara cuando hago click enn el boton
function muestra_oculta(id) {
    //decalro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(id);
    if (div.style.display=="none"){
        div.style.display="flex";
    }
    else 
    div.style.display ="none";
}

