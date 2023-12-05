import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBotton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebollas', completed: true},
  {text: 'Tomar el curso de Introducción a React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Lalalala', completed: false},
  {text: 'Usar estados derivados', completed: true},
];

function App() {

  // setting states
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // setting derived states

    //  H1 TODOS
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

    // Filter TODOS with input
  const searchedTodos = todos.filter(
    (todo) => {

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);

    }
  );
  
  const completeTodo = (text) => {

    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    
    setTodos(newTodos);

  }

  const deleteTodo = (text) => {

    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    
    setTodos(newTodos);

  }
   
  return (
    <>

      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBotton />

    </>
  );
}

export default App;