import React, { Component } from 'react';

class Cell extends Component {
    constructor(prop) {
        super();
        this.state = {
            color: prop.value
        };
    }

    updateState = () => {
        return this.setState({
            color: '#333'
        })
    }

    render() {
        console.log(this)
        return(
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.updateState}>
            </div>
        )
    }
}
export default Cell;
