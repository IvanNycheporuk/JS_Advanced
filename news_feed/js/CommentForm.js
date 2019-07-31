export default class CommentForm {
    constructor(submitComment) {
        this.submitComment = submitComment;
    }

    Build() {
        let form = document.createElement('div');
        form.classList.add('form-group', 'comment-form');

        form.innerHTML = `
            <input class="form-control mb-3" name="commentAuthor" type="text" id="commentAuthor">
            <textarea class="form-control mb-3" name="commentDescription"></textarea>
            <button type="submit" class="form-control">Send Post</button>               
        `;

        this.AddEvents(form);

        return form;
    }

    AddEvents(el) {
        el.querySelector('button').addEventListener('click', () => {
            

            if(!this.ValidateForm(el)) {
                alert('please tell me who you are');
                return;
            }

            let data = this.GetComment(el);                

            this.submitComment(data);

            this.ResetForm(el);
        })
    }

    GetComment(el) {
        let comment = {};
        let commentsArr = Array.from(el.querySelectorAll('[name]'));
        
        commentsArr.forEach(item => {
            comment[item.name] = item.value;
        });

        return comment;
    }

    ResetForm(el) {
        let commentsArr = Array.from(el.querySelectorAll('[name]'));
        commentsArr.forEach(item => {
            item.value = '';
        });
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
}    