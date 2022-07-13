import User from "../controller/user.controller.js"

export default function requisicoesPerfil(){
    const btnSair = document.querySelector(".button_perfil_sair")
    const texto = document.querySelector(".modal_titulo_perfil")
    const btnSalvar = document.querySelector(".button_salvar_perfil")
    const modal = document.querySelector(".modal_perfil")

    btnSair.addEventListener("click", ()=>{
        modal.remove()
    })

    btnSalvar.addEventListener("click", async (e)=>{
        e.preventDefault()
        await User.userUpdate({
            "usr_image": texto.value
        })
    })
}