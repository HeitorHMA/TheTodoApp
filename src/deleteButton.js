function deleteButton(){
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(function(button){
        button.addEventListener("click",function(){
            const todosContainer= document.querySelector("#todosContainer")
            const todoParent = button.parentElement;
            todosContainer.removeChild(todoParent);
})})}
export default deleteButton;