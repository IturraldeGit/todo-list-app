import './CreateTodoButton.css';

function CreateTodoBotton({ setOpenModal }) {
    return (
        <button className='CreateTodoButton' onClick={
            () => {
                setOpenModal(state => !state);
            }
        }>
            +
        </button>
    );
}

export { CreateTodoBotton };