
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

var buttons = document.querySelectorAll('.showButton');

var tabsArray = Array.from(document.querySelectorAll('.tab'));

buttons.forEach(btn => {
  btn.addEventListener('click', function(e){
    buttons.forEach(function(btn){
      btn.classList.remove('active-btn');
    })
    e.target.classList.add('active-btn');
    hideAllTabs();
    getTabByDataTab(e.target.dataset.tab).classList.add('active');
  })
})

function getTabByDataTab(tabId) {
  return tabsArray.find(function(tab) {
    return tab.dataset.tab == tabId
  })
}

function hideAllTabs(){
  tabsArray.forEach(function(tab){
    tab.classList.remove('active');
  })
}


