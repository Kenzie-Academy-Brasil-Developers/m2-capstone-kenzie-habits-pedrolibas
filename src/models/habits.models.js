import Habit from "../controller/habit.controller.js";

export class cards {
    constructor(id, title, description, category, status){
        this.id = id
        this.title = title
        this.description = description
        this.categoria = category
        this.status = status
    }
    static async listarHabitos() {
        const habito = await Habit.allHabit()
        habito.forEach(element => {
            console.log('entrou')
            const card = new cards(element.habit_id, element.habit_title, element.habit_description, element.habit_category, element.habit_status)
            card.createCard()
        })
    }

    createCard() {
        const maindDiv = document.querySelector('.div_ul')

        const container = document.createElement('li')
        const status = document.createElement('input')
        const title = document.createElement('p')
        const descricao = document.createElement('p')
        const divCategoria = document.createElement('div')
        const categoria = document.createElement('span')
        const editButton = document.createElement('button')
        const i = document.createElement('i')

        container.classList.add('conteudo_li')
        status.classList.add('checkbox')
        title.classList.add('conteudo_titulo')
        descricao.classList.add('conteudo_descricao')
        divCategoria.classList.add('conteudo_categoria')
        editButton.classList.add('conteudo_editar')
        i.classList.add('fa-solid', 'fa-ellipsis')

        title.innerText = this.title
        descricao.innerText = this.description
        categoria.innerText = this.categoria
        status.type = 'checkbox'

        editButton.append(i)
        divCategoria.append(categoria)
        container.append(status, title, descricao, divCategoria, editButton)
        maindDiv.append(container)
    }
}

cards.listarHabitos()