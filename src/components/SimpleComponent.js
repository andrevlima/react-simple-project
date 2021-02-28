import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("mounted");
    }

    render() {
        return (
            <div>
              <h1>{this.props.title}</h1>  
            </div>
        )
    }
}
