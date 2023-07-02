const listaUser = JSON.parse(localStorage.getItem("listaUser"));

localStorage.setItem("listaUser", JSON.stringify(listaUser));
const produtoList = document.getElementById("produto-list");
const usuarioLogado = JSON.parse(localStorage.getItem("userLogado"));
const index = listaUser.findIndex(
  (usuario) => usuario.userCad === usuarioLogado.user
);

function loadRegistros() {
  let lista_produtos = "";
  let produtos = [];
  for (let i = 0; i < listaUser[index].registroGlicemia.length; i++) {
    produtos.push(JSON.parse(listaUser[index].registroGlicemia[i]));
    lista_produtos += `
            <tr>
                <th>${produtos[i].id}</th>
                <td>${produtos[i].date}</td>
                <td>${produtos[i].time}</td>
                <td>${parseFloat(produtos[i].vlr)}</td>
                <td>
                    <a onclick="getProduto(${produtos[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${
                      produtos[i].id
                    });" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
    produtoList.innerHTML = lista_produtos;
  }
}

// DELETE - PROCEDIMENTO PARA EXCLUIR UM PRODUTO
const produtoDelete = document.getElementById("btn-delete");

produtoDelete.addEventListener("click", (e) => {
  let id = $("#id-prod").text();
  console.log(id);

  let indexRegistro = listaUser[index].registroGlicemia.findIndex(function (
    el
  ) {
    return id === JSON.parse(el).id;
  });

  if (indexRegistro !== -1) {
    listaUser[index].registroGlicemia.splice(indexRegistro, 1);
  }

  console.log(listaUser[index].registroGlicemia);

  localStorage.setItem("listaUser", JSON.stringify(listaUser));
  location.reload();
});

function getProduto(id) {
  if (id > 0) {
    let registro = listaUser[index].registroGlicemia.filter(function (el) {
      return id == JSON.parse(el).id;
    });
    document.getElementById("produto-id").value = id;
    document.getElementById("produto-date").value = registro.date;
    document.getElementById("produto-time").value = registro.time;
    document.getElementById("produto-vlr").value = registro.vlr;
    $("#produto-id").attr("readonly", "readonly");
  }
}

const produtoForm = document.getElementById("Salvar");

produtoForm.addEventListener("click", (e) => {
  let id = document.getElementById("produto-id").value;
  const produto = JSON.stringify({
    id: document.getElementById("produto-id").value,
    date: document.getElementById("produto-date").value,
    time: document.getElementById("produto-time").value,
    vlr: document.getElementById("produto-vlr").value,
  });
  let indexRegistro = listaUser[index].registroGlicemia.findIndex(function (
    el
  ) {
    return id == JSON.parse(el).id;
  });
  console.log(indexRegistro);
  if (indexRegistro >= 0) {
    listaUser[index].registroGlicemia[indexRegistro] = produto;
  } else {
    if (listaUser[index].registroGlicemia) {
      listaUser[index].registroGlicemia.push(produto);
    } else {
      listaUser[index].registroGlicemia = [produto];
    }
  }
  localStorage.setItem("listaUser", JSON.stringify(listaUser));
  location.reload();
});

loadRegistros();
