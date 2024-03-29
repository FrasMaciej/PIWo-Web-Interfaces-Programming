"use strict"
let chosenList = 'todos-list-late';
let list = document.getElementById(chosenList);
const radioGroup = document.getElementById("radio-group");

let lastRemovedTodo = null;
let lastRemovedTodoList = null;
let todoToRemove = null;
const addTodo = (todo, restore = false) => {
    if (todo) {

        let listToEdit = list
        let listNameToPutTodo = chosenList;
        if (restore) {
            listNameToPutTodo = lastRemovedTodoList;
            listToEdit = document.getElementById(listNameToPutTodo)
        }

        const entry = document.createElement('li');
        $(entry).append('<button class="delete-button">X</button>');
        entry.appendChild(document.createTextNode(todo));
        listToEdit.appendChild(entry);

        $('#' + listNameToPutTodo).on('click', '.delete-button', (event) => {
            $('#modal').css("display", "block");
            todoToRemove = event.currentTarget;
            lastRemovedTodo = $(todoToRemove).parent().text().substring(1);
            lastRemovedTodoList = $(todoToRemove).parent().parent()[0].id;
        });

    }
}

const restoreTodo = () => {
    if (lastRemovedTodo) {
        addTodo(lastRemovedTodo, true);
        lastRemovedTodo = null;
        lastRemovedTodoList = null;
        $('#restore-removed-todo-button').css("color", "red").css("cursor", "default");
    }
}

$('#' + 'todos-list-late').on('click', 'li', (event) => {
    onListItemClick(event);
});

$('#' + 'todos-list-now').on('click', 'li', (event) => {
    onListItemClick(event);
});

$('#' + 'todos-list-piwo').on('click', 'li', (event) => {
    onListItemClick(event);
});

const onListItemClick = (event) => {
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
}

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

const filterLists = (filterEnabled, clearFilter = false) => {
    if (filterEnabled) {
        const lists = [document.getElementById("todos-list-late"), document.getElementById("todos-list-now"), document.getElementById("todos-list-piwo")];
        const filterText = document.querySelector("#search-input").value;
        lists.forEach((list) => {
            let i = 0;
            list.childNodes.forEach((child) => {
                if (child.outerText.toLowerCase().substring(1).includes(filterText.toLowerCase()) || clearFilter) {
                    document.getElementById(list.id).children[i].style.display = "block"
                } else {
                    document.getElementById(list.id).children[i].style.display = "none"
                }
                i++;
            })
        });
    }
}

const checkbox = document.querySelector("#search-input-checkbox");
checkbox.addEventListener('change', (event) => {
    if (!checkbox.checked) {
        filterLists(true, true);
    } else {
        filterLists(true);
    }
});