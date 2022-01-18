

document.addEventListener("DOMContentLoaded", () => {
 const taskForm = document.querySelector("#create-task-form")
 taskForm.addEventListener('submit', (e => {
    e.preventDefault()
    handleToDo(e.target["new-task-description"].value)
    taskForm.reset
  }))

}); 

function handleToDo(todo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X"
  p.textContent = `${todo} `
  p.appendChild(btn)

  document.querySelector("#list").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
