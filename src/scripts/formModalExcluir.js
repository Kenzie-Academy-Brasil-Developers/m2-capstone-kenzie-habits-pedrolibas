import Habit from "../controller/habit.controller.js"

export default function requisicaoExcluir(id) {
    const btnSair = document.querySelector('.button__excluir__sair')
    const modal = document.querySelector('.modal__excluir')
    const btnExcluir = document.querySelector('.modal__botao__EbtnExcluir')
    const btnCancelar = document.querySelector('.modal__botao__cancelar')

    btnSair.addEventListener("click", () => {
        modal.remove()
    })

    btnCancelar.addEventListener("click", () => {
        modal.remove()
    })

    btnExcluir.addEventListener("click", async (e) => {
        e.preventDefault()
        await Habit.deleteHabit({
            "habit_id": id,
        })
    })

}