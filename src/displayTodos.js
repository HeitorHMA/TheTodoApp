function displayTodos(){
    const todosArray = JSON.parse(localStorage.getItem('data'));
    for (let i = 0 ; i < todosArray.lenght ; i++){
        const todosContainer = document.querySelector("#todosContainer");
        const todoDiv = document.createElement("div");
        const todoName = todosArray[i];
        todoDiv.innerHTML = `<input type=checkbox><span><h3>${todoName}</h3></span>`;
        todosContainer.appendChild(todoDiv);
    }
}
export default displayTodos