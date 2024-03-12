function deleteButton(){
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(function(button){
        button.addEventListener("click",function(){
            const todosContainer= document.querySelector("#todosContainer")
            const todoParent = button.parentElement;
            todosContainer.removeChild(todoParent);
            
            const index = todosArray.indexOf(todoParent)
            const todosArray = localStorage.getItem('data',JSON.parse(todosArray));
            todosArray.splice(index,1);
            localStorage.setItem('data', JSON.stringify(todosArray));
            console.log(todosArray.indexOf(todoParent))
})})}
export default deleteButton;