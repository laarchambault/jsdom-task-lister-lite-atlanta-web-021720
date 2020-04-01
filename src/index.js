document.addEventListener("DOMContentLoaded", () => {

});


//get form
const form1 = document.querySelector('#create-task-form');
//access event.target.value
form1.addEventListener('submit', function(event){
  event.preventDefault();
  //get input
  const taskEntered = event.target.querySelector('#new-task-description').value;
  //create li with textContent
  const li1 = document.createElement('li');
  li1.innerText = taskEntered
  //assign parent to variable
  const parent = document.querySelector('#tasks');
  //append li to parent
  parent.appendChild(li1)
  //clear form input
  form1.reset()
})