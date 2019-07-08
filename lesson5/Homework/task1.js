/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/


function Comment(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
}

let defaultComment = {
  avatarUrl: 'https://ih1.redbubble.net/image.527035743.3216/flat,550x550,075,f.u1.jpg',
  addLike: function(){
    this.likes++;
  }
}

let comment1 = new Comment('first', 'first test comment goes here', './images/cat1.jpg');
let comment2 = new Comment('second', 'second test comment', './images/cat2.jpg');
let comment3 = new Comment('third', 'third test comment', './images/cat3.jpg');
let comment4 = new Comment('fourth', 'fourth test comment', './images/cat4.jpg');

let comments = [comment1, comment2, comment3, comment4];

Object.setPrototypeOf(comment1, defaultComment);

let commentsContainer = document.getElementById('CommentsFeed');

function Avatar(comments){
  this.comments = comments; 

  this.Render = function(){
    this.comments.forEach( comment => {
      let block = document.createElement('div');

      let title = document.createElement('h3');
      title.innerText = comment.name;
      block.appendChild(title);

      let description = document.createElement('p');
      description.innerText = comment.text;
      block.appendChild(description); 

      let avatar = document.createElement('img');
      avatar.src = comment.avatarUrl;
      block.appendChild(avatar);

      commentsContainer.appendChild(block);      
    })
  }

  this.Render();
}

let avatars = new Avatar(comments);

console.log(comment1);


