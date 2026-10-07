document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="btn-group">
            <button class="priority-btn up-btn" onclick="moveUp(this)">▲</button>
            <button class="priority-btn down-btn" onclick="moveDown(this)">▼</button>
            <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">Delete</button>
        </div>
    `;
    
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function moveUp(button) {
    const currentTask = button.parentElement.parentElement;
    const previousTask = currentTask.previousElementSibling;
    
    // If there is an item above, insert this item before it
    if (previousTask) {
        currentTask.parentNode.insertBefore(currentTask, previousTask);
    }
}

function moveDown(button) {
    const currentTask = button.parentElement.parentElement;
    const nextTask = currentTask.nextElementSibling;
    
    // If there is an item below, insert the next item before this item (swapping them)
    if (nextTask) {
        currentTask.parentNode.insertBefore(nextTask, currentTask);
    }
}

