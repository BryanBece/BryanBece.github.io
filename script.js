const inputTexto = document.getElementById('inputDeTexto');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const botonCopiar = document.getElementById('boton-copiar');
const soloLetras ='^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
  botonEncriptar.addEventListener('click', encriptarTexto);
  botonDesencriptar.addEventListener('click', desencriptarTexto);
  botonCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(encriptar) {
  encriptar.preventDefault();
  inputResultado.value = ' ';
  let texto = inputTexto.value;
  
  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(' ');
    let nuevasPalabras = [];
    
    for (let palabra of palabras) {
      palabra = palabra.replaceAll("e","enter");
      palabra = palabra.replaceAll("i","imes");
      palabra = palabra.replaceAll("a","ai");
      palabra = palabra.replaceAll("o","ober");
      palabra = palabra.replaceAll("u","ufat");      
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } 
    else {
    mostrarError("¡¡Solo se permiten letras minúsculas, sin acentos!!");
    return;
  }  
}

function desencriptarTexto(desencriptar) {
  desencriptar.preventDefault();  
  inputResultado.value = '';
  let texto = inputTexto.value;

  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(" ");
    let nuevasPalabras = [];    

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("ai","a");
      palabra = palabra.replaceAll("enter","e");
      palabra = palabra.replaceAll("imes",'i');
      palabra = palabra.replaceAll("ober",'o');
      palabra = palabra.replaceAll("ufat",'u');
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    mostrarError("¡¡Solo se permiten letras minúsculas, sin acentos!!");
    return;
  }  
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');
  
  if(!existeError) {
      const formulario = document.getElementById('formulario');
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('error');
  
      divMensaje.textContent = mensaje;            
      formulario.appendChild(divMensaje);
      
      setTimeout(()=> {
          divMensaje.remove();
      }, 5000);
  }
}

function copiarTexto(copiar) {
    copiar.preventDefault(); 
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}