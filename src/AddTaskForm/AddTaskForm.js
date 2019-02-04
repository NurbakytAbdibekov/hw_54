import React from 'react';
import './AddTaskForm.css';


function AddTaskForm(props) {
    return <form className="addTaskForm">
            <input type="text" name="name" placeholder="Add new task" value={props.task.name} onChange={props.onChangeInput}/>
            <button disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Add</button>

    </form>
}

export default AddTaskForm;
