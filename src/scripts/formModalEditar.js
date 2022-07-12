import Habit from "../controller/habit.controller.js"

export default function requisicaoEditar(id) {
    const btnSair = document.querySelector(".button_editar_sair")
    const modal = document.querySelector(".modal_editar")
    const titulo = document.querySelector(".modal_titulo_editar")
    const descricao = document.querySelector(".modal_descricao_editar")
    const seleciona = document.querySelector(".modal_categoria_editar")
    const check = document.querySelector(".modal_editar_status input")
    const btnEnviar = document.querySelector(".button_salvar")

    btnSair.addEventListener("click", () => {
        modal.remove()
    })

    btnEnviar.addEventListener("click", async (e) => {
        e.preventDefault()
        await Habit.updateHabit({
            "habit_id": id,
            "habit_title": titulo.value,
            "habit_description": descricao.value,
            "habit_category": seleciona.value,
            "habit_status": check.checked
        })
    })

}