const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorLivrosSomados = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTTotalDosLivrosDisponiveisNaTela(valorLivrosSomados);
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTTotalDosLivrosDisponiveisNaTela(valorSomadoLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorSomadoLivros}</span></p>
    </div>
    `
}
