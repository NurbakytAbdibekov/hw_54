import React, {Component} from 'react';
import './Task.css';
import image from '../img/fa-trash-o.png';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <p className="p">{this.props.name}</p>
                <img src={image} alt="Trash" className="image" onClick={this.props.onRemoveTask}/>
            </div>
        )
    }
}

export default Task
