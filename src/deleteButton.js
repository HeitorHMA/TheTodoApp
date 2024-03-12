function deleteButton(button){
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(function(button){
        button.addEventListener('click',function(){
            const todosContainer= document.querySelector("#todoscontainer")
            const todoParent = button.parentElement;
            todosContainer.removeChild(todoParent);
})})}
export default deleteButton;