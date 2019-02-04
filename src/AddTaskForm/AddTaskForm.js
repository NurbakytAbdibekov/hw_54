import React from 'react';
import './AddTaskForm.css';


function AddTaskForm(props) {
    return <form className="addTaskForm">
            <input className="float-left" type="text" name="name" placeholder="Add new task" value={props.task.name} onChange={props.onChangeInput}/>
            <button className="float-right" disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Add</button>

    </form>
}

export default AddTaskForm;
