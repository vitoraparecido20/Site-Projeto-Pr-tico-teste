document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria');
    const itensCardapio = document.getElementById('itens-cardapio');
    const repetirPedidoInput = document.getElementById('repetir-pedido-input');
    const repetirPedidoButton = document.getElementById('repetir-pedido-button');
    const buscarCardapioInput = document.getElementById('buscar-cardapio-input');
    const quantidadeItens = document.getElementById('quantidade-itens');
    const totalCarrinho = document.getElementById('total-carrinho');

    let carrinho = [];

    // Dados fictícios do cardápio
    const cardapio = {
        marmita: [
            { nome: 'Marmita Completa', preco: 15.00 },
            { nome: 'Marmita Vegetariana', preco: 12.00 }
        ],
        'sugestao-marmita': [
            { nome: 'Marmita do Chef', preco: 18.00 }
        ],
        'prato-dia': [
            { nome: 'Feijoada', preco: 20.00 }
        ],
        porcoes: [
            { nome: 'Batata Frita', preco: 8.00 },
            { nome: 'Frango a Passarinho', preco: 15.00 }
        ],
        bebidas: [
            { nome: 'Refrigerante', preco: 5.00 },
            { nome: 'Suco Natural', preco: 7.00 }
        ]
    };

    // Função para exibir os itens do cardápio
    function exibirItens(categoria) {
        itensCardapio.innerHTML = '';
        if (cardapio[categoria]) {
            cardapio[categoria].forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `<p>${item.nome} - R$ ${item.preco.toFixed(2)} 
                <button data-nome="${item.nome}" data-preco="${item.preco}">Adicionar</button></p>`;
                itensCardapio.appendChild(itemDiv);
            });
        }
    }

    // Evento de clique nas categorias
    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            const categoriaSelecionada = categoria.dataset.categoria;
            exibirItens(categoriaSelecionada);
        });
    });

    // Evento de clique para adicionar item ao carrinho
    itensCardapio.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const nome = event.target.dataset.nome;
            const preco = parseFloat(event.target.dataset.preco);
            carrinho.push({ nome, preco });
            atualizarCarrinho();
        }
    });

    // Função para atualizar o carrinho
    function atualizarCarrinho() {
        quantidadeItens.textContent = carrinho.length;
        const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
        totalCarrinho.textContent = total.toFixed(2);
    }

    // Evento de clique para repetir pedido (funcionalidade básica)
    repetirPedidoButton.addEventListener('click', () => {
        const pedido = repetirPedidoInput.value;
        alert(`Pedido "${pedido}" repetido!`);
    });

    // Evento de digitação para buscar no cardápio (funcionalidade básica)
    buscarCardapioInput.addEventListener('input', () => {
        const busca = buscarCardapioInput.value.toLowerCase();
        console.log(`Buscando por: ${busca}`);
    });
});