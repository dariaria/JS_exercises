
//TODO lista

const exampleTodo = {
    title: 'Zrób trening',
    description: 'Cardio i siłowy',
    status: 'todo',
    autor: 'Daria Koleśnik'
}

const exampleTodo2 = {
    title: 'Zrób pracę domową',
    description: 'Praca ma być zrobiona na 12 punktów',
    status: 'inprogress',
    autor: 'Daria Koleśnik'
}


const exampleTodo3 = {
    title: 'Namaluj obraz',
    description: 'Użyj farb akrylowych',
    status: 'completed',
    autor: 'Daria Koleśnik'
}



const todos = [exampleTodo, exampleTodo2, exampleTodo3];


// ZAD 1 

function displayAll() {
    for (var i = 0; i < todos.length; i++) {
        console.log(`Zadanie ${i + 1}: ${todos[i].title} (${todos[i].description}) - status: ${todos[i].status}`)
    }
}

    
