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
];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoBotton />

    </>
  );
}

export default App;