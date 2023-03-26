const addTodo = (todo) => {
    if (todo) {
        const list = document.getElementById('todos-list');
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(todo));
        list.appendChild(entry);
    }
}