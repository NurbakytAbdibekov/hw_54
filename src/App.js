import React, {Component} from 'react';
import './App.css';
import Task from './Task/Task';
import AddTaskForm from './AddTaskForm/AddTaskForm';

class App extends Component {
    state = {
        tasks: [
            {id: 1, name: 'Buy milk'},
            {id: 2, name: 'Walk with dog'},
            {id: 3, name: 'Do homework'}
        ],
        currentTask: {name: ''},
        showPeople: true
    };

    removeTask = (id) => {
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    };

    getTask = () => {
        if (this.state.showPeople) {
            return <div>
                {
                    this.state.tasks.map((task) => {
                        return <Task
                            key={task.id}
                            name={task.name}
                            onRemoveTask={() => this.removeTask(task.id)}
                        >
                        </Task>;
                    })
                }
            </div>
        } else {
            return null;
        }
    };

    changeTaskInput = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        let currentTask = {
            ...this.state.currentTask,
            [name]: value
        };
        this.setState({
            ...this.state,
            currentTask
        });
    };

    addTask = (event) => {
        event.preventDefault();
        let task = {...this.state.currentTask};
        const now = new Date();
        task.id = now.getTime();
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            currentTask: {name: ''}
        });
    };

    isAddButtonDisabled = () => {
       return this.state.currentTask.name === ''
    };

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div>
                    <AddTaskForm
                        task={this.state.currentTask}
                        onChangeInput={this.changeTaskInput}
                        onAddTask={this.addTask}
                        isAddButtonDisabled={this.isAddButtonDisabled()}
                    />
                </div>
                {this.getTask()}
            </div>
        );
    }
}

export default App;
