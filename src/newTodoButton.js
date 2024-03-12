function newTodoButton(){
    const consoleButton = document.querySelector("#console");
    consoleButton.addEventListener("click",addTodo);
    
    function addTodo(){
        let newData = document.getElementById('input').value;
    
        if(localStorage.getItem('data') == null){
            localStorage.setItem('data', '[]');
        }
    let oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);
    
    localStorage.setItem('data',JSON.stringify(oldData));
    }};
export default newTodoButton;