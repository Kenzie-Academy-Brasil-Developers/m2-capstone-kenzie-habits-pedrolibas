import Modais from "../models/modal.models.js"
import Formularios from "../controller/formulario.controller.js"
import cards from "../models/habits.models.js"
import User from "../controller/user.controller.js"

cards.listarHabitos()

class homePage{
    static botaoCriar(){
        const btn = document.querySelector(".filtro_nav button")
        btn.addEventListener("click", ()=>{
            Modais.criar()
            Formularios.requisicaoCriar()
        })
    }

    static cabecalho(){
        const user = JSON.parse(localStorage.getItem("@kenzie-habits:user"))
        const img = document.querySelector(".perfil_div img")
        const img2 = document.querySelector("header img")
        const h3 = document.querySelector(".perfil_div h3")

        
        img.src = user.usr_image
        img2.src = user.usr_image
        h3.innerText = user.usr_name
    }
}

homePage.botaoCriar()
homePage.cabecalho()
