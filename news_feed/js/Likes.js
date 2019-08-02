export default class Likes{
    constructor(onClick) {
        this.likesCount = 0;
        this.el = null;

        this.onClick = onClick;
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

        this.el = likesBlock;

        return this.el;
    }

    AddEvents(el) {
        el.querySelector('.likes').addEventListener('click', () => {
            el.querySelector('.counter').innerHTML = `Likes: ${++this.likesCount}`;
            this.onClick(this.likesCount);
        });
    }

    SetCount(value) {
        this.el.querySelector('.counter').innerHTML = `Likes: ${value}`;
        this.likesCount = value;
    }
}