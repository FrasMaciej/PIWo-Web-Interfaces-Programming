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
    const label = document.createElement('label');

    if (event.target.classList.contains('checked')) {
        date = new Date();
        minutes = date.getMinutes();
        if (minutes <= 9) {
            minutes = '0' + minutes
        }
        hours = date.getHours();
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
