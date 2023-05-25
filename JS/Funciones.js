function encriptar(texto) {
  let texto_encriptado = '';
    for (let i = 0; i < texto.length; i++) {
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
  let  texto_encriptado = texto;
    texto_desencriptado = texto_encriptado.replace(/enter/g, 'e');
    texto_desencriptado = texto_desencriptado.replace(/imes/g, 'i');
    texto_desencriptado = texto_desencriptado.replace(/ai/g, 'a');
    texto_desencriptado = texto_desencriptado.replace(/ober/g, 'o');
    texto_desencriptado = texto_desencriptado.replace(/ufat/g, 'u');
    return texto_desencriptado;
}

function encripta_click(){
  var entrada = document.getElementById("entrada").value;
  var salida = encriptar(entrada);
  if(salida===''){
    document.getElementById("salida").innerHTML = "Ningun mensaje fue encontrado";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("img").style.display = "block";
    document.getElementById("aviso").style.display = "block";
  }
  else{
    document.getElementById("salida").innerHTML = salida;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("img").style.display = "none";
    document.getElementById("aviso").style.display = "none";
  }
}

function desencripta_click(){
  var entrada = document.getElementById("entrada").value;
  var salida = desencriptar(entrada);
  if(salida===''){
    document.getElementById("salida").innerHTML = "Ningun mensaje fue encontrado";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("img").style.display = "block";
    document.getElementById("aviso").style.display = "block";
  }
  else{
    document.getElementById("salida").innerHTML = salida;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("img").style.display = "none";
    document.getElementById("aviso").style.display = "none";
  }
}

function copyToClipboard() {
  const element = document.getElementById("salida");
  if (element) {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = element.innerHTML;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
  }
}

