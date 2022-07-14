import Modais from "../models/modal.models.js"
import Formularios from "../controller/formulario.controller.js"
import cards from "../models/habits.models.js"

cards.listarHabitos()

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
const sair = document.querySelector(".sair_de_tudo");

sair.addEventListener("click", () => logout());

function logout() {
    localStorage.clear();
    window.location.href = "src/views/homepage.html";
  }