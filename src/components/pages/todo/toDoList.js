import React, {Component} from 'react';

import TodoItem from "./todo-item";

export default class ToDo extends Component{
    constructor(props){
        super(props);

        this.state = {
            todo: '',
            todos: []
        }
        
        this.onChange=this.onChange.bind(this);
        this.addToDo=this.addToDo.bind(this)
    }

    onChange(event){
        this.setState({
            todo: event.target.value
        })
    }

    addToDo(event){
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.todo],
            todo: ''
        })
    }

    renderTodos(){
        return this.state.todos.map((item, index) => {
            return <TodoItem title={item} key={index} />
        })
    }

    render(){
        return(
            <div className='toDo'>
                <h1>ToDo List</h1>
                <form onSubmit={this.addToDo} className='add-todo'>
                    <input
                        type='text'
                        placeholder='Add ToDo'
                        value={this.state.todo}
                        onChange={this.onChange}
                    />

                    <button type='submit'>Add</button>
                </form>

                {this.renderTodos()}
            </div>
        )
    }
}