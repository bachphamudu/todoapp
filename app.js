// Lấy các phần tử DOM cần thiết
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Hàm xử lý việc thêm công việc mới kèm nút xóa
function addTodo() {
    const todoText = todoInput.value.trim(); // Lấy dữ liệu và loại bỏ khoảng trắng thừa

    // Kiểm tra nếu ô input trống thì không làm gì cả
    if (todoText === '') {
        alert('Vui lòng nhập tên công việc!');
        return;
    }

    // 1. Tạo phần tử thẻ li mới
    const li = document.createElement('li');
    
    // Tạo một thẻ span chứa text để không bị dính liền chữ với nút xóa
    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;
    li.appendChild(textSpan);

    // 2. Tạo nút xóa [X]
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn'); // Thêm class CSS để định dạng

    // 3. Lắng nghe sự kiện click vào nút xóa này để xóa hàng chứa nó
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li); // Xóa thẻ li khỏi danh sách ul
    });

    // 4. Gắn nút xóa vào trong thẻ li
    li.appendChild(deleteBtn);

    // 5. Thêm thẻ li hoàn chỉnh vào danh sách ul
    todoList.appendChild(li);

    // Xóa nội dung ô input sau khi thêm thành công
    todoInput.value = '';
    todoInput.focus();
}

// Bắt sự kiện khi nhấn nút "Thêm"
addBtn.addEventListener('click', addTodo);

// Bắt thêm sự kiện khi nhấn phím Enter trong ô input
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});