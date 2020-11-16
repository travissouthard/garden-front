import React, { Component } from 'react'
import Post from "./Post"
import PostForm from "./PostForm"
import displayDatetime from "../functions/displayDatetime"

export default class Plot extends Component {
    displayTags = (array) => {
        let tags = array.join(", ")
        return tags
    }
    
    render() {
        return (
            <article>
                <h3>{this.props.plot.title}</h3>
                {this.props.plot.posts.map((post, index) => {
                    return <Post post={post} key={index}/>
                })}
                <PostForm 
                    handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    setPostTitle={this.props.setPostTitle}
                    setDescription={this.props.setDescription}
                    title={this.props.plot.title}
                />
                <p>Last updated: {displayDatetime(this.props.plot.updatedAt)}</p>
                <p>{this.displayTags(this.props.plot.tags)}</p>
            </article>
        )
    }
}
