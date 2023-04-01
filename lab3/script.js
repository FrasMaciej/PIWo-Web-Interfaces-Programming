"use strict"
let chosenList = 'todos-list-late';
let list = document.getElementById(chosenList);
const radioGroup = document.getElementById("radio-group");

let lateList = [];
let todoList = [];
let piwoList = [];

let lastRemovedTodo = null;
let todoToRemove = null;
const addTodo = (todo) => {
    if (todo) {
        const entry = document.createElement('li');
        $(entry).append('<button class="delete-button">X</button>');
        entry.appendChild(document.createTextNode(todo));
        list.appendChild(entry);
        $('#' + chosenList).on('click', '.delete-button', (event) => {
            $('#modal').css("display", "block");
            todoToRemove = event.currentTarget;
            lastRemovedTodo = $(todoToRemove).parent().text().substring(1);
        });

    }
}

const restoreTodo = () => {
    if (lastRemovedTodo) {
        addTodo(lastRemovedTodo);
        lastRemovedTodo = null;
        $('#restore-removed-todo-button').css("color", "red").css("cursor", "default");
    }
}

$('#' + chosenList).on('click', 'li', (event) => {
    if (!event.target.classList.contains('delete-button')) {

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
});

const cancelRemovingTodo = () => {
    $('#modal').css("display", "none");
}

const confirmRemovingTodo = () => {
    if (todoToRemove) {
        $(todoToRemove).parent().remove();
    }
    $('#modal').css("display", "none");
    $('#restore-removed-todo-button').css("color", "green").css("cursor", "pointer");;
}

radioGroup.addEventListener('click', () => {
    const radioGroup = document.getElementsByName('todo_list_choice');

    radioGroup.forEach((radio) => {
        if (radio.checked) {
            chosenList = radio.value;
            list = document.getElementById(chosenList);
        }
    })
})

const hideList = (listId) => {
    if ($('#' + listId).css("display") === "none") {
        $('#' + listId).css("display", "block");
    } else {
        $('#' + listId).css("display", "none");
    }

}