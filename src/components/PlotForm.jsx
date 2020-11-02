import React, { Component } from 'react'

export default class PlotForm extends Component {
    render() {
        return (
            <form onSubmit={(event) => this.props.handleSubmit(event)}>
                <label htmlFor="title">Title:
                    <input
                        type="text" 
                        id="title" 
                        name="form" 
                        value={this.props.title} 
                        onChange={(event) => this.props.handleChange(event, this.props.setTitle)}
                    />
                </label>
                <label htmlFor="tags">Tags:
                    <input 
                        type="text" 
                        id="tags" 
                        name="form" 
                        value={this.props.tags} 
                        onChange={(event) => this.props.handleChange(event, this.props.setTags)}
                        placeholder="(separated by commas)"
                    />
                </label>
                <label htmlFor="imageUrl">Image URL:
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="form" 
                        value={this.props.imageUrl} 
                        onChange={(event) => this.props.handleChange(event, this.props.setImageUrl)}
                    />
                </label>
                <input type="submit" value="Add plot"/>
            </form>
        )
    }
}
