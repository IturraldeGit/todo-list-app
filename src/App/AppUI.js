import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBotton } from '../CreateTodoButton';

function AppUI({
    
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}) {
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

// const defaultTodos = [
//   {text: 'Cortar cebollas', completed: true},
//   {text: 'Tomar el curso de Introducción a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Lalalala', completed: false},
//   {text: 'Usar estados derivados', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

export { AppUI };