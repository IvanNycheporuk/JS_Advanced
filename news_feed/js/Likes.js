export default class Likes{
    constructor() {
        this.likesCount = 0;
    }

    Build() {
        let likesBlock = document.createElement('div');
        likesBlock.classList.add('social', 'd-flex', 'justify-content-between', 'mb-3');

        likesBlock.innerHTML = `
            <a class="likes">
                <i class="far fa-heart"></i>
                <span class="counter"> Likes ${this.likesCount} </span>
            </a>
        `;

        this.AddEvents(likesBlock);

        return likesBlock;
    }

    AddEvents(el) {
        el.querySelector('.likes').addEventListener('click', () => {
            el.querySelector('.counter').innerHTML = `Likes: ${++this.likesCount}`
        });
    }
}