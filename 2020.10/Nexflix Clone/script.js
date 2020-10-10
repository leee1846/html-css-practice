let button = document.querySelectorAll('.q-button')
let appear = document.querySelectorAll('.question-box > .bottom');


for(let i = 0 ; i < button.length; i++){
	button[i].addEventListener('click', function(e){
		e.target.classList.toggle('active');
		if(e.target.classList.contains('active')){
			appear[i].style.display = "block";
		}else{
			appear[i].style.display = "none"
		}
	})
}

//
//button.forEach(addEventListener('click',(e)=>{  
//  e.target.classList.toggle('active');
//    if (appear.style.display === "none") {
//      appear.style.display = "block";
//    } else {
//      appear.style.display = "none";
//    }
//	
//		for(var i = 0 ; i < 6; i++){
//			console.log(button[i])
//		}
//  })
//)