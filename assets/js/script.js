let button1= document.getElementById('navbut1');
let button2= document.getElementById('navbut2');
let button3= document.getElementById('navbut3');

let i=1;
function changemenu(){
  if(i%2==0){
      button1.classList.add('hidden');
  	  button1.classList.remove('show');
      button2.classList.add('hidden');
  	  button2.classList.remove('show');
      button3.classList.add('hidden');
  	  button3.classList.remove('show');
  }
  else{
    button1.classList.remove('hidden');
    button1.classList.add('show');
    button2.classList.remove('hidden');
    button2.classList.add('show');
    button3.classList.remove('hidden');
    button3.classList.add('show');
    }
  i++;
}

function menuiconchange(variable1) {
  variable1.classList.toggle("change");
}
