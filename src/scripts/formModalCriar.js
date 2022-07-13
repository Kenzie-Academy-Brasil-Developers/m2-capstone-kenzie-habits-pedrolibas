import Habit from "../controller/habit.controller.js"

export default function requisicaoCriar(id) {
    const btnSair = document.querySelector('.button__criar__sair')
    const modal = document.querySelector('.modal__criar')
    const titulo = document.querySelector('.modal__criar__titulo')
    const descricao = document.querySelector('.modal__criar__descricao')
    const selecionar = document.querySelector('.modal__criar__categoria')
    const btnInserir = document.querySelector('.modal__botao__inserir')

    btnSair.addEventListener("click", () => {
        modal.remove()
    })

    btnInserir.addEventListener("click", async (e) => {
        e.preventDefault()
        await Habit.updateHabit({
            "habit_id": id,
            "habit_title": titulo.value,
            "habit_description": descricao.value,
            "habit_category": selecionar.value,
            "habit_status": check.checked
        })
    })

}