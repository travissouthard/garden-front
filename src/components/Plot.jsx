import React, { Component } from 'react'
import Post from "./Post"

export default class Plot extends Component {
    render() {
        return (
            <article>
                <h3>{this.props.plot.title}</h3>
                {this.props.plot.posts.map((post, index) => {
                    return <Post post={post} key={index}/>
                })}
                <p>Last Updated: {this.props.plot.updatedAt}</p>
                <p>Tags: {this.props.plot.tags}</p>
            </article>
        )
    }
}
