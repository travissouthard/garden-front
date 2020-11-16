import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.description}</p>
            </div>
        )
    }
}
