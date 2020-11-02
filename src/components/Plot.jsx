import React, { Component } from 'react'
import Post from "./Post"
import PostForm from "./PostForm"

export default class Plot extends Component {
    displayTags = (array) => {
        let tags = array.join(", ")
        return tags
    }

    displayDatetime = (datetime) => {
        let date = datetime.slice(0, 10)
        let time = datetime.slice(11, 19)
        let dateArray = date.split("-")
        let timeArray = time.split(":")

        let readableDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0]
        if (timeArray[0] == "00") {
            timeArray[0] = "12"
            timeArray[2] = "AM"
        } else if (parseInt(timeArray[0]) > 12) {
            timeArray[0] = (parseInt(timeArray[0]) - 12).toString()
            timeArray[2] = "PM"
        } else {
            timeArray[2] = "AM"
        }
        timeArray[1] = ":" + timeArray[1] + " "

        return readableDate + ", " + timeArray.join("")
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
                />
                <p>Last Updated: {this.displayDatetime(this.props.plot.updatedAt)}</p>
                <p>{this.displayTags(this.props.plot.tags)}</p>
            </article>
        )
    }
}
