function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.onclick = function() {
    li.classList.toggle('completed');
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = function(e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}