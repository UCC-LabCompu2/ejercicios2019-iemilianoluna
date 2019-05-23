/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function saludar(){
 alert('hola mundo');
}

function convertir(id_elem, valor_elem) {

    if(id_elem=='metro'){
        document.getElementById("pulgada").value = valor_elem * 39.3701;
    }

}

function convertir(id_elem, valor_elem) {
    if(id_elem=='metro'){
        document.getElementById("pie").value = valor_elem * 3.28084;
    }

}