import React from 'react';
import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUI';

function App() {

  // setting states
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    
    saveTodos(newTodos);

  }

  const deleteTodo = (text) => {

    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    
    saveTodos(newTodos);

  }
 
  return (
    
    <AppUI 

      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    
    />

  );
  
}

export default App;