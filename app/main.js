let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const resultado = await fetch(endpointDaAPI);
    livros = await resultado.json();
    let livrosComDesconto = aplicarDescontos(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}