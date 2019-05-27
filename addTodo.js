import React, { Component } from 'react'

export default class  extends Component {
    state = {
        content : ''
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state);
        //to empty the input feild
        this.setState({
            content : ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>I Have More Work! To-Do</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
