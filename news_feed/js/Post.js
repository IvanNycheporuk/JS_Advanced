import Likes from './Likes';
import CommentForm from './CommentForm';
import App from './script';

export default class Post {
    constructor(data) {
        this.id = data.id || new Date().getTime()
        this.data = data;
        this.comments = [];
    }

    Build() {
        let post = document.createElement('div');
        post.classList.add('card', 'mb-3');

        let {authorName, postDescription} = this.data;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let likes = new Likes((likesCount) => {
            App.UpdatePostLikes(this.id, likesCount);
        });
        likes.Build();

        if (this.data.likesCount) {
            likes.SetCount(this.data.likesCount);
        }

        post.innerHTML = `
            <div class="card-body" data-id=${this.id}>
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

        post.querySelector('.likes-container').appendChild(likes.Build());

        let commentForm = new CommentForm((data) => {
            this.AddComment(data, true);            
            this.RenderComments();
        });

        post.querySelector('.card-body').appendChild(commentForm.Build());

        post.querySelector('._commentsBtn').addEventListener('click', () => {
            post.querySelector('.comment-form').classList.toggle('show');
        });

        this.el = post;

        return post;
    }

    AddComment(data, isNeedSave) {
        let comment = document.createElement('div');
        comment.classList.add('comment', 'mb-3');

        comment.innerHTML = `
            <span>Author: ${data.commentAuthor}</span>
            <p>${data.commentDescription}</p>
        `;

        if(isNeedSave) {
            App.AddPostComment(this.id, {
                author: data.commentAuthor,
                text: data.commentDescription
            });
        }

        this.comments.push(comment);
        this.UpdateCommentsCounter();
        this.RenderComments();
    }

    UpdateCommentsCounter() {
        this.el.querySelector(".comments-count").innerHTML = `Comments (${this.comments.length})`;
    }

    RenderComments() {
        let commentsContainer = this.el.querySelector('.comment-block');
        this.comments.forEach( item => {
            commentsContainer.appendChild(item);
        })            
    } 
}