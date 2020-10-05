let questionBottom = document.querySelector('.question-list .question-box .bottom');
let button = document.querySelector('.question-list .question-box .top i');

button.addEventListener('click',(e)=>{
  questionBottom.classList.toggle('show');
  button.classList.toggle('active');
})