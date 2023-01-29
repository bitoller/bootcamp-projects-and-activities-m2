const ulTag = document.querySelector("ul");
const formTag = document.querySelector("form");
const inputTag = document.querySelector("input");

function renderizaSobremesas(listaDeSobremesas) {
  ulTag.innerHTML = "";

  listaDeSobremesas.forEach((sobremesa) => {
    const tagLi = document.createElement("li");

    const imgTag = document.createElement("img");
    imgTag.src = sobremesa.imagem;
    imgTag.alt = sobremesa.nome;

    const containerDeTexto = document.createElement("div");

    const titulo = document.createElement("h2");
    titulo.innerText = sobremesa.nome;

    const descricao = document.createElement("p");
    descricao.innerText = sobremesa.descricao;

    containerDeTexto.append(titulo, descricao);
    tagLi.append(imgTag, containerDeTexto);
    ulTag.append(tagLi);
  });
}

formTag.addEventListener("submit", aoSubmeter);

function aoSubmeter(event) {
  event.preventDefault();

  const valorDoInput = inputTag.value;

  if (procuraSobremesa(valorDoInput)) {
    renderizaSobremesas(procuraSobremesa(valorDoInput));
  } else {
    console.error("Retorno da função inválido");
  }
}

renderizaSobremesas(listaDeSobremesas);
