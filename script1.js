document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.querySelectorAll('.categoria');
    const itensCardapio = document.getElementById('itens-cardapio');
    const repetirPedidoInput = document.getElementById('repetir-pedido-input');
    const repetirPedidoButton = document.getElementById('repetir-pedido-button');
    const buscarCardapioInput = document.getElementById('buscar-cardapio-input');
    const quantidadeItens = document.getElementById('quantidade-itens');
    const totalCarrinho = document.getElementById('total-carrinho');
    const verCarrinhoButton = document.getElementById('ver-carrinho');
    const pagamentoSection = document.getElementById('pagamento');
    const valorFinal = document.getElementById('valor-final');
    const finalizarPagamentoButton = document.getElementById('finalizar-pagamento');

    let carrinho = [];

    // Dados do cardápio atualizado
    const cardapio = {
        marmita: [
            { nome: 'Marmita Completa', preco: 15.00 },
            { nome: 'Marmita Vegetariana', preco: 12.00 }
        ],
        bebidas: [
            { nome: 'Suco de Espinafre', preco: 10.90 },
            { nome: 'Suco de Cenoura', preco: 10.90 }
        ]
    };

    // Exibir os itens do cardápio conforme a categoria selecionada
    function exibirItens(categoria) {
        itensCardapio.innerHTML = '';
        if (cardapio[categoria]) {
            cardapio[categoria].forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <p>${item.nome} - R$ ${item.preco.toFixed(2)} 
                    <button data-nome="${item.nome}" data-preco="${item.preco}">Adicionar</button></p>`;
                itensCardapio.appendChild(itemDiv);
            });
        }
    }

    // Evento para clique nas categorias
    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            const categoriaSelecionada = categoria.dataset.categoria;
            exibirItens(categoriaSelecionada);
        });
    });

    // Evento para adicionar itens ao carrinho
    itensCardapio.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const nome = event.target.dataset.nome;
            const preco = parseFloat(event.target.dataset.preco);
            carrinho.push({ nome, preco });
            atualizarCarrinho();
        }
    });

    // Atualizar informações do carrinho
    function atualizarCarrinho() {
        quantidadeItens.textContent = carrinho.length;
        const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
        totalCarrinho.textContent = total.toFixed(2);
    }

    // Evento para repetir pedido (simples alerta)
    repetirPedidoButton.addEventListener('click', () => {
        const pedido = repetirPedidoInput.value;
        alert(`Pedido "${pedido}" repetido!`);
    });

    // Buscar no cardápio (apenas simulação de busca)
    buscarCardapioInput.addEventListener('input', () => {
        const busca = buscarCardapioInput.value.toLowerCase();
        console.log(`Buscando por: ${busca}`);
    });

    // Exibir carrinho e a opção de pagamento
    verCarrinhoButton.addEventListener('click', () => {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
        } else {
            let mensagem = "Itens no carrinho:\n";
            carrinho.forEach(item => {
                mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
            });
            alert(mensagem);

            // Exibir a seção de pagamento
            pagamentoSection.classList.remove('hidden');
            valorFinal.textContent = carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);
        }
    });

    // Evento para finalizar o pagamento
    finalizarPagamentoButton.addEventListener('click', () => {
        alert("Pagamento realizado com sucesso! Obrigado por comprar conosco.");
        carrinho = [];
        atualizarCarrinho();
        pagamentoSection.classList.add('hidden');
    });
});
