function displayTodos(){
    const todosArray = JSON.parse(localStorage.getItem('data'));;
    for (let i = 0 ; i < todosArray.length; i++){
        const todosContainer = document.querySelector("#todosContainer");
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todos");
        todoDiv.innerHTML = `<input type = "checkbox" class="chckBox" /><h2><span class="usrTsk">${todosArray[i]}</span></h2><button class="delete-button">X</button>`;
        todosContainer.appendChild(todoDiv);
    }
}

export default displayTodos