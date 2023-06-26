function aplicarDescontos  (livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map ( livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    }) //...livro é utilizado para puxar todos os itens do array
    return livrosComDesconto;
}