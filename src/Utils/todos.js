const todos = ["Reading Books", "Bath", "Breakfast", "Learning", "Playing"];

export const fetchTodos = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todos)
        }, 1000);
    });
}

export const addTodo = (todo) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...todos, todo])
        }, 1000)
    })
}
