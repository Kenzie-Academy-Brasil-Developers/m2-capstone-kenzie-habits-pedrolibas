import requisicaoExcluir from "./formModalExcluir.js"

class ModalExcluir {
    static excluir() {
        const body = document.querySelector('body')
        const modalExcluir = document.createElement('div')
        const container = document.createElement('div')
        const modalExcluirInner = document.createElement('div')
        const modalExcluirCabecalho = document.createElement('div')
        const modalExcluirDiv = document.createElement('div')
        const modalExcluirBotoes = document.createElement('div')
        const h2 = document.createElement('h2')
        const i = document.createElement('i')
        const btnSair = document.createElement('button')
        const h3 = document.createElement('h3')
        const modalExcluirTexto = document.createElement('p')
        const btnCancelar = document.createElement('button')
        const btnExcluir = document.createElement('button')

        h2.innerText = 'Excluir hábito'
        btnSair.innerText = 'X'
        h3.innerText = 'Certeza que deseja excluir este hábito?'
        modalExcluirTexto.innerText = 'Após executar essa ação não será possível desfazer'
        btnCancelar.innerText = 'Cancelar'
        btnExcluir.innerText = 'Sim, excluir este hábito'

        modalExcluir.classList.add('modal__excluir')
        container.classList.add('container')
        modalExcluirInner.classList.add('modal__excluir__inner')
        modalExcluirCabecalho.classList.add('modal__excluir__cabecalho')
        i.classList.add('fa-solid', 'fa-pen-to-square')
        btnSair.classList.add('button__excluir__sair')
        modalExcluirBotoes.classList.add('modal__excluir__botoes')
        btnCancelar.classList.add('modal__botao__cancelar')
        btnExcluir.classList.add('modal__botao__excluir')

        h2.appendChild(i)
        modalExcluirCabecalho.append(h2, btnSair)
        modalExcluirDiv.append(h3, modalExcluirTexto)
        modalExcluirBotoes.append(btnCancelar, btnExcluir)
        modalExcluirInner.append(modalExcluirCabecalho, modalExcluirDiv, modalExcluirBotoes)
        container.appendChild(modalExcluirInner)
        modalExcluir.appendChild(container)
        body.appendChild(modalExcluir)
    }
}

ModalExcluir.excluir()
requisicaoExcluir()

