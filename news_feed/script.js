document.addEventListener('DOMContentLoaded', () => {
    class App {
        constructor(el) {
            this.el = el;

            this.Init();
        }

        Init() {
            console.log(this.PostsContainer());
            console.log(this.FormContainer())
            this.el.append(this.PostsContainer(), this.FormContainer());
        }

        PostsContainer() {
            let postContainer = document.createElement('div');
            postContainer.classList.add('pure-u-3-5');
            

            return postContainer;
        }

        FormContainer(){
            let formContainer = document.createElement('div');
            formContainer.classList.add('pure-u-2-5');

            let postForm = new PostForm();
            formContainer.appendChild(postForm.Build());            

            return formContainer;
        }
    }

    class PostForm {
        constructor(){
            //sthis.Build();
        }

        Build(){
            let form = document.createElement('form');
            form.classList.add('pure-form', 'pure-form-stacked');

            form.innerHTML = `            
                <fieldset>
                    <div class="pure-control-group">
                        <label for="authorName">Author</label>
                        <input id="authorName" type="text" placeholder="Author name">                        
                    </div>
            
                    <div class="pure-control-group">
                        <label for="userPost">Add some description here</label>
                        <textarea name="userPost" id="userPost"></textarea>
                    </div>
            
                    <div class="pure-control-group">
                        <label for="email">Email Address</label>
                        <input id="email" type="email" placeholder="Email Address">
                    </div>
            
                    <div class="pure-control-group">
                        <label for="foo">Supercalifragilistic Label</label>
                        <input id="foo" type="text" placeholder="Enter something here...">
                    </div>
                    <div class="pure-g">
                        <div class="pure-u-1-3">
                            <label for="first-name">First Name</label>
                            <input id="first-name" class="pure-u-23-24" type="text">
                        </div>
            
                        <div class="pure-u-1-3">
                            <label for="last-name">Last Name</label>
                            <input id="last-name" class="pure-u-23-24" type="text">
                        </div>
                    </div>    
            
                    <div class="pure-controls">
                        <label for="cb" class="pure-checkbox">
                            <input id="cb" type="checkbox"> I've read the terms and conditions
                        </label>
            
                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </div>
                </fieldset>
            `;

            return form;
        }
    }


    new App(document.getElementById('App'));
});

