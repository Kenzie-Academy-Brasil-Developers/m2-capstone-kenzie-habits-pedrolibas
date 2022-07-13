import requisicaoCriar from "./formModalCriar.js"

class ModalCriar {
    static criar() {
        const body = document.querySelector('body')
        const modalCriar = document.createElement('div')
        const container = document.createElement('div')
        const modalInnerCriar = document.createElement('div')
        const modalCriarCabecalho = document.createElement('div')
        const modalCriarBotoes = document.createElement('div')
        const h2 = document.createElement('h2')
        const i = document.createElement('i')
        const btnSair = document.createElement('button')
        const form = document.createElement('form')
        const titulo = document.createElement('label')
        const textoTitulo = document.createElement('input')
        const descricao = document.createElement('label')
        const textoDescricao = document.createElement('textarea')
        const categoria = document.createElement('label')
        const selecao = document.createElement('select')
        const casa = document.createElement('option')
        const estudo = document.createElement('option')
        const lazer = document.createElement('option')
        const trabalho = document.createElement('option')
        const saude = document.createElement('option')
        const btnInserir = document.createElement('button')

        h2.innerText = 'Criar hábito'
        btnSair.innerText = 'X'
        titulo.innerText = 'Título'
        descricao.innerText = 'Descrição'
        categoria.innerText = 'Categoria'
        casa.innerText = 'Casa'
        estudo.innerText = 'Estudo'
        lazer.innerText = 'Lazer'
        trabalho.innerText = 'Trabalho'
        saude.innerText = 'Saúde'
        btnInserir.innerText = 'Inserir'

        textoTitulo.type = 'text'
        textoDescricao.cols = '30'
        textoDescricao.rows = '10'
        casa.value = 'casa'
        estudo.value = 'estudo'
        lazer.value = 'lazer'
        trabalho.value = 'trabalho'
        saude.value = 'saude'

        modalCriar.classList.add('modal__criar')
        container.classList.add('container')
        modalInnerCriar.classList.add('modal__criar__inner')
        modalCriarCabecalho.classList.add('modal__criar__cabecalho')
        i.classList.add('fa-solid', 'fa-pen-to-square')
        btnSair.classList.add('button__criar__sair')
        form.classList.add('modal__criar__form')
        textoTitulo.classList.add('modal__criar__titulo')
        textoDescricao.classList.add('modal__criar__descricao')
        selecao.classList.add('modal__criar__categoria')
        modalCriarBotoes.classList.add('modal__criar__botoes')
        btnInserir.classList.add('modal__botao__inserir')

        h2.appendChild(i)
        modalCriarCabecalho.append(h2, btnSair)
        selecao.append(casa, estudo, lazer, trabalho, saude)
        modalCriarBotoes.append(btnInserir)
        form.append(titulo, textoTitulo, descricao, textoDescricao, categoria, selecao, modalCriarBotoes)
        modalInnerCriar.append(modalCriarCabecalho, form)
        container.appendChild(modalInnerCriar)
        modalCriar.appendChild(container)
        body.appendChild(modalCriar)
    }
}

ModalCriar.criar()
requisicaoCriar()

