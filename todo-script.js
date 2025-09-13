document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        
        
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        textSpan.className = 'task-text';

        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'completeButton';
        completeButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            li.classList.toggle('completed');
        });

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            taskList.removeChild(li);
        });

        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);

       
        li.appendChild(textSpan);
        li.appendChild(buttonContainer);

        
        taskList.appendChild(li);

        
        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);

  
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});