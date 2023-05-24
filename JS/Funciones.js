function encriptar(texto) {
    var texto_encriptado = '';
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
    var texto_encriptado = texto;
    texto_desencriptado = texto_encriptado.replace("enter", 'e');
    texto_desencriptado = texto_desencriptado.replace("imes", 'i');
    texto_desencriptado = texto_desencriptado.replace("ai", 'a');
    texto_desencriptado = texto_desencriptado.replace("ober", 'o');
    texto_desencriptado = texto_desencriptado.replace("ufat", 'u');
    return texto_desencriptado;
  }