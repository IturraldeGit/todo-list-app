import './CreateTodoButton.css';

function CreateTodoBotton() {
    return (
        <button className='CreateTodoButton' onClick={(event) => {
                console.log('Le diste click')
                console.log(event)
                console.log(event.target);
            }
        }>
            +
        </button>
    );
}

export { CreateTodoBotton };