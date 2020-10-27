import React, { Component } from 'react'

export default class Plot extends Component {
    render() {
        return (
            <article>
                <h3>{this.props.plot.title}</h3>
                <p>Last Updated: {this.props.plot.updatedAt}</p>
                <p>Tags: {this.props.plot.tags}</p>
            </article>
        )
    }
}
