//function add task
function addTask(){
    const taskTitle = document.querySelector("#task-title").value;
    console.log(taskTitle);

    if(taskTitle){
        //clone template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //add title 
        // newTask.querySelector(".task-title").textContent = taskTitle;
        newTask.querySelector(".task-title").textContent = taskTitle;
        
        //delete class
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add task list
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //add event remove
        const removeBtn = newTask.querySelector(".remove-btn")
        .addEventListener("click", function(){
            removeTask(this);
        });

        //add event done task
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })

        //clear text
        document.querySelector("#task-title").value = "";
    }
};

function removeTask(task){
    task.parentNode.remove(true);
}

function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

//event add to do
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addTask();
});