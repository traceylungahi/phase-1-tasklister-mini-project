document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    makeMyToDo(document.querySelector("#new-task-description").value)
    form.reset()
  })
})
function makeMyToDo(todo) {
  const p = document.createElement('p')
  const btn = document.createElement('button')
  btn.addEventListener('click', handleTheDelete)
  btn.textContent = ' x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#list").appendChild(p)
}
function handleTheDelete(event){
  event.target.parentNode.remove()
}
