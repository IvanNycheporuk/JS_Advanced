/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
  var sliderContainer = document.getElementById('slider');

  var btnNext = document.getElementById('NextSilde');
  var btnPrev = document.getElementById('PrevSilde');

  function renderImage(index) {
    var slide = document.createElement('img');
    slide.src = OurSliderImages[index];
    sliderContainer.innerHTML = '';

    sliderContainer.appendChild(slide);

    setTimeout(()=> slide.classList.add('animate'), 300);
  }

  function nextSlide() {
    if (currentPosition === OurSliderImages.length - 1) {
      currentPosition = 0;
    } else {
      currentPosition += 1;
    }
    
    renderImage(currentPosition);    
  }

  function prevSlide() {
    if (currentPosition === 0) {
      currentPosition = OurSliderImages.length - 1;
    } else {
      currentPosition -= 1;
    }
    renderImage(currentPosition);
  }

  window.addEventListener('load', function(){
    renderImage(currentPosition);
    
    btnNext.addEventListener('click', function(){
      nextSlide(currentPosition);
    });

    btnPrev.addEventListener('click', function(){
      prevSlide(currentPosition);
    });
  })
