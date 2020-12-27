import React, { Component } from 'react'

export default class PostForm extends Component {
    state = {
        formOn: false
    }

    toggleForm(event) {
        event.preventDefault()
        this.setState({
            formOn: !this.state.formOn
        })
    }
    
    render() {
        return (
            <form onSubmit={(event) => this.props.handleSubmit(event, this.props.title)}>
                {this.formOn === true ? (
                    <fieldset>
                        <legend>{this.props.title}</legend>
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
                        <button onClick={(event) => this.toggleForm(event)}>Cancel</button>
                    </fieldset>
                ) : (
                    <button onClick={(event) => this.toggleForm(event)}>Add post</button>
                )}
            </form>
        )
    }
}
