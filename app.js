function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa)

    if (campoPesquisa == "") {
        section.innerHTML = ` 
        "<div class="item-resultado">
        <h2>Escreva o nome de um personagem.</h2>
        </div>
        `
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let ator = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // transforma todos as letras em minúsculo
        titulo = dado.titulo.toLowerCase()
        ator = dado.ator.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || ator.includes(campoPesquisa)) {

        console.log(dado.titulo.includes(campoPesquisa))
      // Cria uma nova div para cada dado e adiciona à string de resultados
      resultados += `
        <div class="item-resultado">
          <h2> 
            ${dado.titulo} ${dado.ator && dado.link ? `( <a href="${dado.link}" target="_blank">${dado.ator}</a> )` : ""}
          </h2>
          <p class="descrição-meta">
            ${dado.descricao}
          </p>
        </div>
      `;
        }
    }
  
    if (!resultados) {
        resultados = ` 
        "<div class="item-resultado">
        <h2>Nada foi encontrado.</h2>
        </div>
        `
    }

    // Atribui os resultados à seção HTML
    section.innerHTML = resultados;
  }
