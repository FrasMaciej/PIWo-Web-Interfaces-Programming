"use strict"
const list = document.getElementById('todos-list');
const addTodo = (todo) => {
    if (todo) {
        const entry = document.createElement('li');
        $(entry).append('<button class="delete-button">X</button>');
        $('#todos-list').on('click', '.delete-button', (event) => {
            $(event.currentTarget).parent().remove();
        });
        entry.appendChild(document.createTextNode(todo));
        list.appendChild(entry);
    }
}

list.onclick = (event) => {
    event.target.classList.toggle('checked');
    const label = document.createElement('label');

    if (event.target.classList.contains('checked')) {
        const date = new Date();
        const minutes = date.getMinutes();
        if (minutes <= 9) {
            minutes = '0' + minutes
        }
        const hours = date.getHours();
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
    }
}
