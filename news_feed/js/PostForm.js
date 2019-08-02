export default class PostForm {
    constructor(submitCallback){
        this.onSubmit = submitCallback;
    }

    Build(){
        let form = document.createElement('form');
        form.innerHTML = `            
            <div class="form-group">
                <label for="authorName">author name</label>
                <input type="name" class="form-control" name="authorName">
            </div>
            <div class="form-group">
                <label for="postDescription">Description</label>
                <textarea name="postDescription" id="postDescription" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <input type="submit" class="form-control" id="submit">
            </div>
        `;

        this.AddEvents(form);

        return form;
    }

    AddEvents(form) {
        form.querySelector('[type="submit"]').addEventListener('click', (e) => {
            e.preventDefault();

            if (!this.ValidateForm(form)){
                alert('please, fillout all the fileds');
                return;
            } 

            let data = this.GetPost(form);

            this.onSubmit(data);

            form.reset();
        })
    }

    ValidateForm(form) {
        let arr = Array.from(form.querySelectorAll('[name]'));

        let valid = true;

        arr.forEach( item => {item.classList.remove('error')})

        arr.forEach(item => {
            if (item.value === '') {
                valid = false;
                item.classList.add('error')
            }
        })

        return valid;
    }

    GetPost(form) {
        let arr = Array.from(form.querySelectorAll('[name]'));

        let data = {};
        
        arr.forEach(item => {
            data[item.name] = item.value;
        });

        return data;
    }
}