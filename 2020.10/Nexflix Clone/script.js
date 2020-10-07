let button = document.querySelectorAll('.q-button')
let appear = document.querySelectorAll('.question-box .bottom');

button.forEach(addEventListener('click',(e)=>{  
  e.target.classList.toggle('active');
    if (appear.style.display === "none") {
      appear.style.display = "block";
    } else {
      appear.style.display = "none";
    }
  }
))