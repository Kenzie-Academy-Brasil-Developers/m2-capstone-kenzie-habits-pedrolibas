import User from "../controller/user.controller.js"

import Habit from "./habit.controller.js"

export default class Formularios {
    static requisicaoEditar(id) {
        const btnSair = document.querySelector(".button_editar_sair")
        const modal = document.querySelector(".modal_editar")
        const titulo = document.querySelector(".modal_titulo_editar")
        const descricao = document.querySelector(".modal_descricao_editar")
        const seleciona = document.querySelector(".modal_categoria_editar")
        const check = document.querySelector(".modal_editar_status input")
        const btnEnviar = document.querySelector(".button_salvar")

        const inserir = document.querySelector(".modal_editar_form")
        const span = document.createElement('span')
        inserir.appendChild(span)

        btnSair.addEventListener("click", () => {
            modal.remove()
        })


        btnEnviar.addEventListener("click", async (e) => {
            e.preventDefault()
            if (titulo.value === "" || descricao.value === "" || seleciona.value === "") {
                span.innerText = "preencha todos os campos"
            } else {
                await Habit.updateHabit({
                    "habit_title": titulo.value,
                    "habit_description": descricao.value,
                    "habit_category": seleciona.value
                }, id)

                window.location.reload(true)
            }
        })
    }

    static requisicaoCriar() {
        const btnSair = document.querySelector('.button__criar__sair')
        const modal = document.querySelector('.modal__criar')
        const titulo = document.querySelector('.modal__criar__titulo')
        const descricao = document.querySelector('.modal__criar__descricao')
        const selecionar = document.querySelector('.modal__criar__categoria')
        const btnInserir = document.querySelector('.modal__botao__inserir')
        
        const inserir = document.querySelector('.modal__criar__botoes')
        const span = document.createElement('span')
        inserir.appendChild(span)

        btnSair.addEventListener("click", () => {
            modal.remove()
        })

        btnInserir.addEventListener("click", async (e) => {
            e.preventDefault()
            console.log(selecionar.value)
            if (titulo.value === "" || descricao.value === "" || selecionar.value === "") {
                span.innerText = "preencha todos os campos"
            } else {
                await Habit.createHabit({
                    "habit_title": titulo.value,
                    "habit_description": descricao.value,
                    "habit_category": selecionar.value,
                })
                window.location.reload(true)
                aparecerPopUp1()
                
            }
        })
    }

    static requisicaoExcluir(id) {
        const btnSair = document.querySelector('.button__excluir__sair')
        const modal = document.querySelector('.modal__excluir')
        const btnExcluir = document.querySelector('.modal__botao__excluir')
        const btnCancelar = document.querySelector('.modal__botao__cancelar')

        btnSair.addEventListener("click", () => {
            modal.remove()
        })

        btnCancelar.addEventListener("click", () => {
            modal.remove()
        })

        btnExcluir.addEventListener("click", async (e) => {
            e.preventDefault()
            await Habit.deleteHabit(id)
            window.location.reload(true)
        })
    }

    static requisicoesPerfil() {
        const btnSair = document.querySelector(".button_perfil_sair")
        const texto = document.querySelector(".modal_titulo_perfil")
        const btnSalvar = document.querySelector(".button_salvar_perfil")
        const modal = document.querySelector(".modal_perfil")

        btnSair.addEventListener("click", () => {
            modal.remove()
        })

        btnSalvar.addEventListener("click", async (e) => {
            e.preventDefault()
            const userImg = JSON.parse(localStorage.getItem("@kenzie-habits:user"))
            const span = document.querySelector(".verifica_perfil")

            if(texto.value != ""){
                await User.userUpdate({
                    "usr_image": texto.value
                })
                userImg.usr_image = texto.value
                localStorage.setItem("@kenzie-habits:user", JSON.stringify(userImg))
                window.location.reload(true)
            } else {
                span.innerText = "Preencha o campo"
            }


        })
    }
}
let popUp1 = document.querySelector(".popUp1")
let popUp2 = document.querySelector(".popUp2")
let popUp3 = document.querySelector(".popUp3")

function aparecerPopUp1(){
    popUp1.style.display = "flex"
    fechar1()
}
function fechar1(){
    setTimeout(()=>{
    popUp1.style.display = "none"
}, 5000)

}

function aparecerPopUp2(){
    
    popUp2.style.display = "flex"
}

function fechar2(){
    setTimeout(()=>{
    popUp2.style.display = "none"
}, 5000)
}
function aparecerPopUp3(){
    popUp3.style.display = "flex"
}
function fechar3(){
    setTimeout(()=>{
    popUp3.style.display = "none"
}, 5000)
}