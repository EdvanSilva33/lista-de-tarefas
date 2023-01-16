$(document).ready(function () {
  // Adicionar evento de submissão no formulário
  $("form").submit(function (e) {
    e.preventDefault();

    // Obter o valor do campo de texto
    const tarefasAdd = $("#nome-da-tarefa").val();

    // Adicionar elemento <li> na lista
    $("#lista").append(
      '<li><p class="lista" title="click para concluida">' +
        tarefasAdd +
        "</p></li>"
    );

    $("#nome-da-tarefa").val("");
  });
  // Adicionar evento de clique nos itens da lista
  $("#lista").on("click", "li", function () {
    // Adicionar efeito de riscado no texto
    $(this).toggleClass("lista-estilo"); //toggleClass tira e coloca o estilo quando clicar
  });
});
