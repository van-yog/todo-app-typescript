import React, {useState} from 'react';
import Navbar from "./components/Navbar"
import {TodoForm} from "./components/TodoForm"
import {TodoList} from "./components/TodoList"
import {ITodo} from "./interfaces"

const  App:React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    console.log("Add New Todo", title);
    const newTodo:ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHandler = (id:number)=>{
    console.log("id " , id);

    setTodos(prev=>(
      prev.map(todo=>{
        console.log(todo);
        if(todo.id === id) {
          console.log("АЙДИ==ТУДУАЙДИ",todo);
          todo.completed = !todo.completed
          console.log("АЙДИ==ТУДУАЙДИіафваіф",todo);
        }
        console.log(todo);
        return todo;
    })))
  }

  const removeHandler = (id:number) =>{
    setTodos(prev=> prev.filter(todo=> todo.id !==id))
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="container">
      <TodoForm onAdd={addHandler} />

      <TodoList onToggle={toggleHandler} onRemove={removeHandler} todos={todos}/>
    </div>
    </>
  )
}

export default App;
