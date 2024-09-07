function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value   
    
if (!campoPesquisa == "") {
    section.innerHTML = "<p>Escreva o nome de uma Sigla</p>"
    return
}    

campoPesquisa = campoPesquisa.toLowerCase ()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";            
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descrição.toLocaleLowerCase()
        tags = dados.tags.toLocaleLowerCase ()
        if (titulo.includes (campoPesquisa) || descrição.includes (campoPesquisa) || tags.includes (campoPesquisa)) 
            {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.Link} target="_blank">Mais Informações</a>
            </div>
        `;

        }
        // Cria uma nova div para cada resultado
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}