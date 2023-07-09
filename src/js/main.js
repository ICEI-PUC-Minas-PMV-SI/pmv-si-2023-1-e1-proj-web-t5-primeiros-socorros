google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(calculaMedia);

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
  calculaMedia();
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
  e.preventDefault();
  let id = document.getElementById("produto-id").value;
  const produto = JSON.stringify({
    id: document.getElementById("produto-id").value,
    date: formatarData(document.getElementById("produto-date").value),
    time: document.getElementById("produto-time").value,
    vlr: document.getElementById("produto-vlr").value,
  });
  if (listaUser[index].registroGlicemia) {
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
  } else {
    listaUser[index].registroGlicemia = [produto];
  }
  localStorage.setItem("listaUser", JSON.stringify(listaUser));
  location.reload();
});

function calculaMedia() {
  let registros = listaUser[index].registroGlicemia;
  let valores = [["Data", "Valor", "Média"]];
  let mediaGeral = 0;
  console.log("reg", registros);
  if (registros.length) {
    console.log(listaUser[index].registroGlicemia);
    registros.map((registro, index) => {
      registro = JSON.parse(registro);
      mediaGeral += parseInt(registro.vlr);
      let media = mediaGeral / (index + 1);
      valores.push([
        `${registro.date} ${registro.time}`,
        parseInt(registro.vlr),
        parseInt(media),
      ]);
      console.log(registro);
    });
    drawChart(valores, parseInt(mediaGeral / registros.length));
  }
}

function drawChart(valores, mediaGeral) {
  console.log("draw", valores);
  var data = google.visualization.arrayToDataTable(valores);

  var options = {
    title: `Gráfico de Glicemia (Média glicêmica até o momento: ${mediaGeral})`,
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: 'lightcyan'
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}

function formatarData(data) {
  var partes = data.split("-");
  var dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];
  return dataFormatada;
}
loadRegistros();
