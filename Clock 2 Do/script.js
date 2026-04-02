// DIGITAL CLOCK
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// TO-DO LIST
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    if(taskInput.value.trim() === '') return;
    
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

addBtn.addEventListener('click', addTask);

// Optional: Add task with Enter key
taskInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') addTask();
});
