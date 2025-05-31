const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');


//                                                              Adding the list items through the input field - container
function addTask(){
  if(inputBox.value === ""){
    alert('You must write something first')
  }else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li)

    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }

  inputBox.value = ''
  saveData()
}


//                                                           Triggering the checked and disappearing ofl items through click event
listContainer.addEventListener('click', (e)=> {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()

  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }
}, false)


//                                                             Saving and Storing the data
function saveData() {
  localStorage.setItem('data' , listContainer.innerHTML)
}


//                                                              Showing the data once stored even after refreshed
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data')
}

showTask()