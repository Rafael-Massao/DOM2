class Produto {
    constructor() {
        this.nomeDisplay = document.querySelector('#card-nome');
        this.preview = document.querySelector('#card-preview');
        this.Ativo = false;
        
        this.atualizarStatusVisual();
    }

    atualizarTexto(novoTexto) {
        this.nomeDisplay.innerText = novoTexto || "Nome do Produto";
    }

    mudarCor(novaCor) {
        this.preview.style.backgroundColor = novaCor;
    }

    alternarStatus() {
        this.Ativo = !this.Ativo;
        this.atualizarStatusVisual();
    }

    atualizarStatusVisual() {
        this.preview.style.border = this.Ativo ? '5px solid green' : '5px solid red';
    }
}

const produto = new Produto();

// Eventos
document.querySelector('#in-nome').addEventListener('input', (event) => {
    produto.atualizarTexto(event.target.value);
});

document.querySelector('#in-cor').addEventListener('input', (event) => {
    produto.mudarCor(event.target.value);
});

document.querySelector('#card-preview').addEventListener('contextmenu', (event) => {
    event.preventDefault(); 
    produto.alternarStatus();
});