
//TODO lista


const STATUS_TODO = 'TODO';
const STATUS_INPROGRESS = 'INPROGRESS';
const STATUS_COMPLETED = 'COMPLETED';



const exampleTodo = {
    title: 'Zrób trening',
    description: 'Cardio i siłowy',
    status: STATUS_TODO,
    autor: 'Daria Koleśnik'
}

const exampleTodo2 = {
    title: 'Zrób pracę domową',
    description: 'Praca ma być zrobiona na 12 punktów',
    status: STATUS_INPROGRESS,
    autor: 'Daria Koleśnik'
}


const exampleTodo3 = {
    title: 'Namaluj obraz',
    description: 'Użyj farb akrylowych',
    status: STATUS_INPROGRESS,
    autor: 'Daria Koleśnik'
}



const todos = [exampleTodo, exampleTodo2, exampleTodo3];


// ZAD 1 

function displayAll() {
    for (var i = 0; i < todos.length; i++) {
        console.log(`Zadanie ${i + 1}: ${todos[i].title} (${todos[i].description}) - status: ${todos[i].status}`)
    }
}

    
function displayStatusTodo() {
    for (var i = 0; i < todos.length; i++) { 
        if (todos[i].status === 'todo') {   
        console.log(`Zadanie ${i + 1}: ${todos[i].title} (${todos[i].description}) - status: ${todos[i].status}`)
        }
    }
}

function display(status) {

    const statusCondition =
        status === STATUS_INPROGRESS || 
        status === STATUS_TODO ||
        status === STATUS_COMPLETED ||
        status === undefined; 

    if (!statusCondition) {
        return console.log('Niepoprawny status');
    }

    const todosToDisplay = [];
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].status === status || status === undefined) {
            todosToDisplay.push(todos[i]);
        }
    }


    if (todosToDisplay.length) { 
        for (var i = 0; i < todosToDisplay.length; i++) { 

            const { title, description, status } = todosToDisplay[i];

            console.log(`Zadanie ${i + 1}: ${title} (${description}) - status: ${status}`);
        }
    } else {
        console.log('brak zadań');
    }
}


// ZAD 2 


function addTodo(title, description, status, autor){
    const newTodo = {
        title,
        description,
        status,
        autor, 

    }

    todos.push(newTodo);
    console.log(`Nowe zadanie : ${title} (${description}) - status: ${status}`);
    console.log('-----');
    console.log('Wszystkie zadania');
    display();
}

// ZAD 3

