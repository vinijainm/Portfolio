
let item1=document.getElementById('linkedin');
let item2=document.getElementById('github');
function changeBColor(){
    item1.style.backgroundColor = 'lightblue';
  
  }
  function changeBColor2(){
    item2.style.backgroundColor = 'lightblue';
  
  }
  
  item1.addEventListener('click', changeBColor);
  item2.addEventListener('click', changeBColor2);