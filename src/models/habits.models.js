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
            const card = new cards(element.habit_id, element.habit_title, element.habit_description, element.habit_category, element.habit_status)
            card.createCard()
        })
    }

    createCard() {
        const maindDiv = document.querySelector('.div_ul')

        const container = document.createElement('li')
        const status = document.createElement('input')
        const title = document.createElement('p')
        const description = document.createElement('p')
        const categoria = document.createElement('span')
        const editButton = document.createElement('img')

        container.classList.add('li_content')
        status.classList.add('checkbox')
        title.classList.add('title_content')
        description.classList.add('description_content')
        categoria.classList.add('card__categoria')
        editButton.classList.add('card__edit')

        title.innerText = this.title
        description.innerText = this.description
        categoria.innerText = this.categoria
        status.type = 'checkbox'

        container.append(status, title, description, categoria, editButton)
        maindDiv.append(container)
    }
}

cards.listarHabitos()