import teste from "./formModalEditar.js"

class ModalEditar{
    static editar(){
        const body = document.querySelector("body")
        const modalEditar = document.createElement("div")
        const container = document.createElement("div")
        const modalInnerEditar = document.createElement("div")
        const modalEditarCabecalho = document.createElement("div")
        const modalEditarStatus = document.createElement("div")
        const modalEditarBotoes = document.createElement("div")
        const h2 = document.createElement("h2")
        const i = document.createElement("i")
        const btnSair = document.createElement("button")
        const form = document.createElement("form")
        const titulo = document.createElement("label")
        const textoTitulo = document.createElement("input")
        const descricao = document.createElement("label")
        const textoDescricao = document.createElement("textarea")
        const categoria = document.createElement("label")
        const selecao = document.createElement("select")
        const casa = document.createElement("option")
        const estudo = document.createElement("option")
        const lazer = document.createElement("option")
        const trabalho = document.createElement("option")
        const saude = document.createElement("option")
        const status = document.createElement("label")
        const check = document.createElement("input")
        const btnExcluir = document.createElement("button")
        const btnSalvar = document.createElement("button")

        h2.innerText = " Editar hábito"
        btnSair.innerText = "X"
        titulo.innerText = "Título"
        descricao.innerText = "Descrição"
        categoria.innerText = "Categoria"
        casa.innerText = "Casa"
        estudo.innerText = "Estudo"
        lazer.innerText = "Lazer"
        trabalho.innerText = "Trabalho"
        saude.innerText = "Saúde"
        status.innerText = "Status"
        btnExcluir.innerText = "Excluir"
        btnSalvar.innerText = "Salvar alterações"

        textoTitulo.type = "text"
        textoDescricao.cols = "30"
        textoDescricao.rows = "10"
        casa.value = "casa"
        estudo.value = "estudo"
        lazer.value = "lazer"
        trabalho.value = "trabalho"
        saude.value = "saude"
        check.type = "checkbox"

        modalEditar.classList.add("modal_editar")
        container.classList.add("container")
        modalInnerEditar.classList.add("modal_inner_editar")
        modalEditarCabecalho.classList.add("modal_editar_cabecalho")
        i.classList.add("fa-solid", "fa-pen-to-square")
        btnSair.classList.add("button_editar_sair")
        form.classList.add("modal_editar_form")
        textoTitulo.classList.add("modal_titulo_editar")
        textoDescricao.classList.add("modal_descricao_editar")
        selecao.classList.add("modal_categoria_editar")
        modalEditarStatus.classList.add("modal_editar_status")
        modalEditarBotoes.classList.add("modal_editar_botoes")
        btnExcluir.classList.add("button_excluir")
        btnSalvar.classList.add("button_salvar")

        h2.appendChild(i)
        modalEditarCabecalho.append(h2, btnSair)
        selecao.append(casa, estudo, lazer, trabalho, saude)
        modalEditarStatus.append(status, check)
        modalEditarBotoes.append(btnExcluir, btnSalvar)
        form.append(titulo, textoTitulo, descricao, textoDescricao, categoria, selecao, modalEditarStatus, modalEditarBotoes)
        modalInnerEditar.append(modalEditarCabecalho, form)
        container.appendChild(modalInnerEditar)
        modalEditar.appendChild(container)
        body.appendChild(modalEditar)
    }
}

ModalEditar.editar()
teste()