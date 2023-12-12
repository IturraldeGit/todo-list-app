import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch() {
    
    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext)
    
    return (
        <input 
            placeholder="Cortar cebolla"
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export { TodoSearch };