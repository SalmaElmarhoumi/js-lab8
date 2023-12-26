
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <span onclick="toggleDone(this)">${taskInput.value}</span>
      <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
      <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    // Save tasks to local storage
    saveTasksToLocalStorage();
  }


  function toggleDone(element) {
    element.classList.toggle('done');
    saveTasksToLocalStorage();
  }

//   // Function to toggle task done status (alternative method)
//   function toggleDoneStatus(element) {
//     const taskItem = element.parentNode;
//     const taskText = taskItem.querySelector('span:first-child');
//     taskText.classList.toggle('done');
//     saveTasksToLocalStorage();
//   }

  // Function to delete a task
  function deleteTask(element) {
    const taskList = document.getElementById('taskList');
    const taskItem = element.parentNode;
    taskList.removeChild(taskItem);
    saveTasksToLocalStorage();
  }

  // Function to save tasks to local storage
  function saveTasksToLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = [];

    // Iterate through each task and store its text content and done status
    taskList.querySelectorAll('.task').forEach(taskItem => {
      const taskText = taskItem.querySelector('span:first-child').textContent;
      const isDone = taskItem.querySelector('span:first-child').classList.contains('done');
      tasks.push({ text: taskText, done: isDone });
    });

    // Save the tasks array to local storage as a JSON string
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to load tasks from local storage on page load
  function loadTasksFromLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
      if (task.done) {
        taskItem.innerHTML = `
          <span class="done" onclick="toggleDone(this)">${task.text}</span>
          <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
          <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
        `;
      } else {
        taskItem.innerHTML = `
          <span onclick="toggleDone(this)">${task.text}</span>
          <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
          <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
        `;
      }
      taskList.appendChild(taskItem);
    });
  }

  // Load tasks from local storage on page load
  document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);
