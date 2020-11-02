import React, { Component } from 'react'

export default class PostForm extends Component {
    render() {
        return (
            <form onSubmit={(event) => this.props.handleSubmit(event)}>
                <label htmlFor="postTitle">Title:
                    <input
                        type="text" 
                        id="postTitle" 
                        name="form" 
                        value={this.props.postTitle} 
                        onChange={(event) => this.props.handleChange(event, this.props.setPostTitle)}
                    />
                </label>
                <label htmlFor="description">Description:
                    <textarea
                        type="text" 
                        id="description" 
                        name="form"
                        onChange={(event) => this.props.handleChange(event, this.props.setDescription)}
                    >{this.props.description}</textarea>
                        
                </label>
                <input type="submit" value="Add post"/>
            </form>
        )
    }
}
