var Input = document.getElementById("entrada");
var Output = document.getElementById("salida");

Input.addEventListener("input", function(event) {
  var inputText = event.target.value;
  var lowercaseText = inputText.toLowerCase();
  var cleanedText = lowercaseText.replace(/[^a-z\s]/g, "");
  event.target.value = cleanedText;
});

function encriptar(texto) {
  var texto_encriptado = '';
    for (var i = 0; i < texto.length; i++) {
      const letra = texto[i];
      switch (letra) {
        case 'e':
          texto_encriptado += 'enter';
          break;
        case 'i':
          texto_encriptado += 'imes';
          break;
        case 'a':
          texto_encriptado += 'ai';
          break;
        case 'o':
          texto_encriptado += 'ober';
          break;
        case 'u':
          texto_encriptado += 'ufat';
          break;
        default:
          texto_encriptado += letra;
          break;
      }
    }
    return texto_encriptado;
  }
  
function desencriptar(texto) {
  var texto_desencriptado = texto;
  texto_desencriptado = texto_desencriptado.replace(/enter/g, 'e');
  texto_desencriptado = texto_desencriptado.replace(/imes/g, 'i');
  texto_desencriptado = texto_desencriptado.replace(/ai/g, 'a');
  texto_desencriptado = texto_desencriptado.replace(/ober/g, 'o');
  texto_desencriptado = texto_desencriptado.replace(/ufat/g, 'u');
  return texto_desencriptado;
}

function encripta_click(){
  var entrada = Input.value;
  hideControls();
  if(entrada.replace(/ /g, '')!==''){
    if(validarTexto(entrada)){
      var salida = encriptar(entrada);
      Input.value = '';
      Output.innerHTML = salida;
      showControls();
    }
    else{
      alerta();
    }
  }  
}

function desencripta_click(){
  var entrada = Input.value;
  hideControls();
  if(entrada.replace(/ /g, '')!==''){
    if(validarTexto(entrada)){
      var salida = desencriptar(entrada);
      Input.value = '';
      Output.innerHTML = salida;
      showControls();
    }
    else{
      alerta();
    }
  } 
}

function copyToClipboard() {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = Output.innerHTML;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    hideControls();
    Swal.fire({
      icon: 'succes',
      title: 'Texto copiado...',
      text: 'El mensaje descubierto ha sido copiado!'
    });
}

function validarTexto(texto) {
  var regex = /^[a-z\s]+$/;
  return regex.test(texto);
}

function hideControls(){
  
  Output.innerHTML = "Ningun mensaje fue encontrado";
  Output.style.height = "auto";
  document.getElementById("copiar").style.display = "none";
  document.getElementById("img").style.display = "inline-table";
  document.getElementById("aviso").style.display = "inline-table";
}

function showControls(){
  Output.style.height = "80%";
  document.getElementById("copiar").style.display = "inline-table";
      document.getElementById("img").style.display = "none";
      document.getElementById("aviso").style.display = "none";
}

function alerta(){
  Swal.fire({
    icon: 'error',
    title: 'Información con errores...',
    text: 'Solo se aceptan letras minusculas y espacios, sin caracteres especiales!'
  });
}