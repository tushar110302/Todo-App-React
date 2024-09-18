import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';


function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo){
    setTodos((prev) => [...prev, todo]);
  }
  function updateTodo(id, todo){
    let newTodos = todos.map((t) => t.id===id ? todo : t);
    setTodos(newTodos);
  }
  function deleteTodo(id){
    let newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  }
  function toggleComplete(id){
    let changedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      else{
        return todo
      }
    })
    setTodos(changedTodos);
  }

  useEffect(()=>{
    const presentTodos = JSON.parse(localStorage.getItem("todos"));
    if(presentTodos && presentTodos.length>0)
      setTodos(presentTodos);
  }, [])

  // Only when a new todo is added, if used in above then it will get everytime a new is added
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete, }}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {
                    todos.map((todo) => (
                      <div className='w-full' key={todo.id}>
                        <Todo todo={todo}/>
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
