function displayTodos(){
    const todosArray = localStorage.getItem('data');
    for (let i = 0 ; i < todosArray.length; i++){
        const todosContainer = document.querySelector("#todosContainer");
        const todoDiv = document.createElement("div");
        const todoName = todosArray[i];
        todoDiv.innerHTML = `<input type=checkbox><span><h3>${todoName}</h3></span>`;
        todosContainer.appendChild(todoDiv);
        console.log(todoName);
    }
}

export default displayTodos