export class cards {
    constructor(id, titutlo, descricao, categoria, status) {
        this.id = id
        this.titutlo = titutlo;
        this.descricao = descricao;
        this.categoria = categoria
        this.status = status
    }

    createCard() {
        const maindDiv = document.querySelector('.divCard')

        const container = document.createElement('li')
        const status = document.createElement('input')
        const title = document.createElement('p')
        const description = document.createElement('p')
        const categoria = document.createElement('span')
        const editButton = document.createElement('img')

        container.classList.add('card__div')
        status.classList.add('card__status')
        title.classList.add('card__titulo')
        description.classList.add('card__descricao')
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