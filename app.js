const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const todoText = todoInput.value.trim(); 

    if (todoText === '') {
        alert('Vui lòng nhập tên công việc!');
        return;
    }

    const li = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;
    li.appendChild(textSpan);


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn'); 

    
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li); 
    });

    
    li.appendChild(deleteBtn);

    
    todoList.appendChild(li);

    
    todoInput.value = '';
    todoInput.focus();
}


addBtn.addEventListener('click', addTodo);


todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});