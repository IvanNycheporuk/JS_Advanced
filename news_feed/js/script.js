import PostForm from './PostForm';
import Post from './Post';

export default class App {
    constructor(el) {
        this.el = el;
        this.el.classList.add('container');

        this.Init();
        this.LoadSavedData();
    }

    Init() {
        let row = document.createElement('div');
        row.classList.add('row');

        this.el.appendChild(row);

        this.el.querySelector('.row').append(this.PostsContainer(), this.FormContainer());
    }

    LoadSavedData() {
        let posts = App.GetSavedPosts();
        posts.forEach(item => {
            let post = new Post(item);
            this.AddPost(post, false);

            item.comments.forEach(comment => {
                post.AddComment({
                    commentAuthor: comment.author,
                    commentDescription: comment.text
                }, false);
            });
        })
    }

    PostsContainer() {
        let postContainer = document.createElement('div');
        postContainer.classList.add('col-7');
        
        let title = document.createElement('h1');
        title.innerText = 'News Feed';
        
        postContainer.appendChild(title);

        return postContainer;
    }

    AddPost(post, isNeedSave) {
        let postContainer = this.el.querySelector('.col-7');
        if (isNeedSave) {
            let posts = App.GetSavedPosts();
            posts.push({
                id: post.id,
                authorName: post.data.authorName,
                postDescription: post.data.postDescription,
                comments: []
            });
            localStorage.setItem('posts', JSON.stringify(posts));
        }
        
        postContainer.appendChild(post.Build());
    }

    FormContainer(){
        let formContainer = document.createElement('div');
        formContainer.classList.add('col-5');

        let title = document.createElement('h1');
        title.innerHTML = "Add post";

        let bodyForm = document.createElement('div');
        bodyForm.classList.add('card', 'card-body');

        formContainer.appendChild(title);
        

        let postForm = new PostForm((data) => {
            let post = new Post(data);

            this.AddPost(post, true);
        });

        bodyForm.appendChild(postForm.Build());

        formContainer.appendChild(bodyForm);            

        return formContainer;
    }

    static UpdatePostLikes(postId, likesCount) {
        let posts = App.GetSavedPosts();

        posts.forEach( post => {
            if (post.id === postId) {
                post.likesCount = likesCount;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    }

    static GetSavedPosts() {
        let lsItem = localStorage.getItem('posts');
        
        if(!lsItem) return [];

        return JSON.parse(lsItem);
    }

    static AddPostComment(postId, comment) {
        let posts = App.GetSavedPosts();

        posts.forEach( post => {
            if(post.id === postId) {
                post.comments.push(comment);
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    }
}   

document.addEventListener('DOMContentLoaded', () => {
    new App(document.querySelector('[data-id="App"]'));
});

