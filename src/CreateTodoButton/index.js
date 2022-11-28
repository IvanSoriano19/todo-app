import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        //prevState es para cuando se haga click se cambie el estado que habia
        //que se pase de false a true cuando se le clicke y viceversa
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
        +
        </button>
    );
}

export { CreateTodoButton };