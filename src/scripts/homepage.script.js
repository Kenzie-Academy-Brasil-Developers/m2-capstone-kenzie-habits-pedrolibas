import Modais from "../models/modal.models.js"
import Formularios from "../controller/formulario.controller.js"

class homePage{
    static botaoCriar(){
        const btn = document.querySelector(".filtro_nav button")
        btn.addEventListener("click", ()=>{
            Modais.criar()
            Formularios.requisicaoCriar()
        })
    }
}

homePage.botaoCriar()
