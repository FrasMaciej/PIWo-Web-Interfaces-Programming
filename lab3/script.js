const list = document.getElementById('todos-list');
const addTodo = (todo) => {
    if (todo) {
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(todo));
        list.appendChild(entry);
    }
}

list.onclick = (event) => {
    event.target.classList.toggle('checked');
}
