"use strict"
const list = document.getElementById('todos-list');
let lastRemovedTodo = null;
const addTodo = (todo) => {
    if (todo) {
        const entry = document.createElement('li');
        $(entry).append('<button class="delete-button">X</button>');
        entry.appendChild(document.createTextNode(todo));
        list.appendChild(entry);
        $('#todos-list').on('click', '.delete-button', (event) => {
            lastRemovedTodo = todo;
            $(event.currentTarget).parent().remove();
        });
    }
}

const restoreTodo = () => {
    if (lastRemovedTodo) {
        addTodo(lastRemovedTodo);
        lastRemovedTodo = null;
    }
}

list.onclick = (event) => {
    event.target.classList.toggle('checked');
    const label = document.createElement('label');

    if (event.target.classList.contains('checked')) {
        let date = new Date();
        let minutes = date.getMinutes();
        if (minutes <= 9) {
            minutes = '0' + minutes
        }
        let hours = date.getHours();
        if (hours <= 9) {
            hours = '0' + hours
        }

        label.innerText = `${date.getFullYear()}/${date.getDate()}/${date.getMonth() + 1} ${hours}:${minutes}`;
        label.classList.add('date-label');
        event.target.appendChild(label);
    } else {
        event.target.classList.remove('label');
        const dateLabel = event.target.querySelector('label');
        event.target.removeChild(dateLabel);
        label.classList.remove('date-label');
    }
}
