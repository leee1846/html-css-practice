let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click',function() {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
})