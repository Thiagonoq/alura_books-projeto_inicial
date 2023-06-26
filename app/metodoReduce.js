function calcularValorTotalLivrosDisponiveis (livros) {
    return (livros.reduce((acc, livro) => acc + livro.preco, 0)*0.9).toFixed(2);
}