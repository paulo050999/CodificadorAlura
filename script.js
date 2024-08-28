function criptografarTexto() {
  let texto = document.getElementById("textoParaCriptografar").value;
  let mensagemErro = document.getElementById("mensagemErro");
  let regex = /^[a-z\s]*$/;

  if (texto) {
      if (!regex.test(texto)) {
          mensagemErro.innerText = "Letras maiúsculas e caracteres especiais não são permitidos. Use apenas letras minúsculas.";
          return;
      } else {
          mensagemErro.innerText = "";

          let textoCriptografado = texto.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");

          document.getElementById("textoParaDescriptografar").value = textoCriptografado;
          document.getElementById("textoCriptografado").value = textoCriptografado;

          document.getElementById("resultadoTexto").innerText = "Texto Criptografado: " + textoCriptografado;
          document.getElementById("areaResultado").style.display = "block";
      }
  } else {
      alert("Por favor, insira um texto para criptografar.");
  }
}

function descriptografarTexto() {
  let textoCriptografado = document.getElementById("textoParaDescriptografar").value;
  let mensagemErro = document.getElementById("mensagemErro");
  
  if (textoCriptografado) {
      if (!/^[a-z\s]*$/.test(textoCriptografado)) {
          mensagemErro.innerText = "Letras maiúsculas e caracteres especiais não são permitidos. Use apenas letras minúsculas.";
          return;
      } else {
          mensagemErro.innerText = "";

          let textoDescriptografado = textoCriptografado.replace(/enter/g, "e")
                                                        .replace(/imes/g, "i")
                                                        .replace(/ai/g, "a")
                                                        .replace(/ober/g, "o")
                                                        .replace(/ufat/g, "u");

          document.getElementById("textoParaCriptografar").value = textoDescriptografado;

          document.getElementById("resultadoTexto").innerText = "Texto Descriptografado: " + textoDescriptografado;
          document.getElementById("areaResultado").style.display = "block";
      }
  } else {
      alert("Por favor, insira um texto criptografado para descriptografar.");
  }
}

function copiarTexto() {
  let texto = document.getElementById("textoCriptografado").value;
  navigator.clipboard.writeText(texto).then(() => {
      alert("Texto copiado para a área de transferência!");
  }).catch(err => {
      alert("Erro ao copiar o texto: " + err);
  });
}
