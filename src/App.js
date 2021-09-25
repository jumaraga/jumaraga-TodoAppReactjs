import './App.css';
import { TodoList } from './todoList.js';
import  TodoItem   from './TodoItem.js';
const todos= [{text:'hola',completed:true},{text:'a',completed:true},{text:'todos',completed:true}]


function App() {
  return (
    <>
    <h1>como te va</h1>
    <TodoList>
      {todos.map(todo=>(
      <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
    </TodoList>
    </>
  );
}

export default App;
