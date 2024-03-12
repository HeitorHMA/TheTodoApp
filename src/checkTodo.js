function addCheckedClass(){
    const checkBoxes = document.querySelectorAll(".chckBox");
    checkBoxes.forEach(function(checkBox){
        checkBox.addEventListener("click",function(){
            const projectDiv = checkBox.parentElement
            if(projectDiv.classList.contains("checked")){
                projectDiv.classList.remove("checked")
            }
            else{projectDiv.classList.add("checked")}})})};
export default addCheckedClass