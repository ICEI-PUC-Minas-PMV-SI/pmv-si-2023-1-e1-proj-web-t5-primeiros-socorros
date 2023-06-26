const listaUser = JSON.parse(localStorage.getItem("listaUser"));

function enviar() {
  usuario = listaUser.filter(function (el) {
    return el.cpfCad === document.getElementById("cpf").value;
  });
  console.log(usuario);
  if (usuario.length > 0) {
    document.getElementById("confirmaSenhap").style.display = "flex";
    document.getElementById("novaSenhap").style.display = "flex";
    document.getElementById("divBotao").style.display = "none";
    document.getElementById("botaoConfirmaSenha").style.display = "flex";
  } else {
    alert("Não existe usuario cadastrado com esse cpf");
  }
}

function salvarSenha() {
  let novasenha = document.getElementById("novaSenha").value;
  let confirmaSenha = document.getElementById("confirmaSenha").value;
  
  if (novasenha === confirmaSenha) {
    let index = listaUser.findIndex(
      (usuario) => usuario.cpfCad === document.getElementById("cpf").value
    );
    listaUser[index].senhaCad = document.getElementById("confirmaSenha").value;
    localStorage.setItem("listaUser", JSON.stringify(listaUser));
    alert("Senha alterada com sucesso.");
    setTimeout(() => {
      window.location.href = "../html/signin.html";
    }, 2000);
  } else {
    alert("Senhas não coincidem.");
  }
}

function mascara(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}
