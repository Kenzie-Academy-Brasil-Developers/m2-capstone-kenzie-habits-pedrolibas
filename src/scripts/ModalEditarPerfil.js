import requisicoesPerfil from "./formEditarPerfil.js"

class ModalPerfil {
    static editarPerfil() {
        const body = document.querySelector("body")
        const modalPerfil = document.createElement("div")
        const container = document.createElement("div")
        const modalInnerPerfil = document.createElement("div")
        const modalPerfilCabecalho = document.createElement("div")
        const h2 = document.createElement("h2")
        const i = document.createElement("i")
        const btnSair = document.createElement("button")
        const form = document.createElement("form")
        const titulo = document.createElement("label")
        const textoTitulo = document.createElement("input")
        const btnSalvar = document.createElement("button")

        h2.innerText = "Editar perfil"
        btnSair.innerText = "X"
        titulo.innerText = "URL da imagem do perfil"
        btnSalvar.innerText = "Salvar alterações"

        textoTitulo.type = "text"

        modalPerfil.classList.add("modal_perfil")
        container.classList.add("container")
        modalInnerPerfil.classList.add("modal_inner_perfil")
        modalPerfilCabecalho.classList.add("modal_perfil_cabecalho")
        i.classList.add("fa-solid", "fa-pen-to-square")
        btnSair.classList.add("button_perfil_sair")
        form.classList.add("modal_perfil_form")
        textoTitulo.classList.add("modal_titulo_perfil")
        btnSalvar.classList.add("button_salvar_perfil")

        h2.appendChild(i)
        modalPerfilCabecalho.append(h2, btnSair)
        form.append(titulo, textoTitulo, btnSalvar)
        modalInnerPerfil.append(modalPerfilCabecalho, form)
        container.appendChild(modalInnerPerfil)
        modalPerfil.appendChild(container)
        body.appendChild(modalPerfil)
    }
}

ModalPerfil.editarPerfil()
requisicoesPerfil()