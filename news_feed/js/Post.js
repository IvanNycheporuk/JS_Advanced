import Likes from './Likes';
import CommentForm from './CommentForm';

export default class Post {
    constructor(data) {
        this.data = data;
        this.comments = [];
    }

    Build() {
        let post = document.createElement('div');
        post.classList.add('card', 'mb-3');

        let {authorName, postDescription} = this.data;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let likes = new Likes().Build();

        post.innerHTML = `
            <div class="card-body">
                <div class="info d-flex justify-content-between ">
                    <span>${authorName}</span>
                    <span>${today}</span>
                </div>
                <img src="" alt="">
                <p class="card-text">${postDescription}</p>
                <div class="social d-flex justify-content-between">
                    <span class='likes-container'></span>
                    <div class="comments">
                        <span class="comments-count">Comments (${this.comments.length})</span>
                        <a class="_commentsBtn" href="#">Write a comment</a>
                    </div>
                </div>                    
                <div class="comment-block">
                </div>
                
            </div>
        `;

        post.querySelector('.likes-container').appendChild(likes);

        let commentForm = new CommentForm((data) => {
            this.AddComment(data);
            this.RenderComments();
        });

        post.querySelector('.card-body').appendChild(commentForm.Build());

        post.querySelector('._commentsBtn').addEventListener('click', () => {
            post.querySelector('.comment-form').classList.toggle('show');
        });

        this.el = post;
        return post;
    }

    AddComment(data) {
        let comment = document.createElement('div');

        console.log(data);

        comment.innerHTML = `
            <div class="comment mb-3">
                <span>Author: ${data.commentAuthor}</span>
                <p>${data.commentDescription}</p>
            </div>
        `;

        this.comments.push(comment);
    }

    RenderComments() {
        let comentsContainer = this.el.querySelector('.comment-block');
        this.comments.forEach( item => {
            comentsContainer.appendChild(item);
        })            
    } 
}