let button = document.querySelector('.q-button')
let appear = document.querySelectorAll('.question-box .bottom');

button.forEach(addEventListener('click',(e)=>{  
  e.target.classList.toggle('active');
  for (let i = 0; i < appear.length; i++) {
      appear[i].classList.toggle('show');
  }
}))