import PostForm from './PostForm';
import Post from './Post';

document.addEventListener('DOMContentLoaded', () => {
    class App {
        constructor(el) {
            this.el = el;
            this.el.classList.add('container');

            this.Init();
        }

        Init() {
            let row = document.createElement('div');
            row.classList.add('row');

            this.el.appendChild(row);

            this.el.querySelector('.row').append(this.PostsContainer(), this.FormContainer());
        }

        PostsContainer() {
            let postContainer = document.createElement('div');
            postContainer.classList.add('col-7');
            
            let title = document.createElement('h1');
            title.innerText = 'News Feed';
            
            postContainer.appendChild(title);

            return postContainer;
        }

        AddPost(post) {
            let postContainer = this.el.querySelector('.col-7');
            
            postContainer.appendChild(post.Build());
        }

        FormContainer(){
            let formContainer = document.createElement('div');
            formContainer.classList.add('col-5');

            let postForm = new PostForm((data) => {
                console.log('onSubmit from App', data);

                let post = new Post(data);

                this.AddPost(post);
            });

            formContainer.appendChild(postForm.Build());            

            return formContainer;
        }
    }   

    new App(document.getElementById('App'));
});

