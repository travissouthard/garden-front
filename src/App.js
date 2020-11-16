import React, {useState, useEffect} from "react"
import Plot from "./components/Plot"
import PlotForm from "./components/PlotForm"

let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://xpense-backend.herokuapp.com';
}

function App() {
  const [plots, setPlots] = useState([])
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [postTitle, setPostTitle] = useState("")
  const [description, setDescription] = useState("")

  let getGarden = () => {
    fetch(baseUrl + "/garden/").then(res => {
      return res.json()
    }).then(data => {
      setPlots(data)
    })
  }

  let handleChange = (event, callback) => {
    callback(event.target.value)
  }

  // let handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log("Form submitted!")
  // }

  let handleNewPlot = (event) => {
    event.preventDefault()
    fetch(baseUrl + "/garden/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        posts: [],
        tags: tags,
        imageUrl: imageUrl,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json(
      )).then(newPlot => {
        const copyPlots = [...plots]
        copyPlots.push(newPlot)
        setPlots(copyPlots)
        setTitle("")
        setTags("")
        setImageUrl("")
      })
  }

  let handleNewPost = (event, plotName) => {
    event.preventDefault()
    fetch(baseUrl + "/garden/post/" + plotName + "/", {
      method: "PUT",
      body: JSON.stringify({
        title: postTitle,
        description: description
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json(
      )).then(updatedPlot => {
        const copyPlots = [...plots]
        let index = plots.findIndex(plot => plots.title === plotName)
        copyPlots[index] = updatedPlot
        setPlots(copyPlots)
        setPostTitle("")
        setDescription("")
      }).catch(error => console.error({"Error": error}))
  }

  useEffect(() => {
    getGarden()
  })

  return (
    <>
      <h1>Travis' Garden</h1>
      {plots.map((plot, index) => {
        return <Plot 
          plot={plot}
          key={index}
          postTitle={postTitle}
          description={description}
          setPostTitle={setPostTitle}
          setDescription={setDescription}
          handleChange={handleChange}
          handleSubmit={handleNewPost}
        />
      })}
      <PlotForm
        handleChange={handleChange}
        handleSubmit={handleNewPlot}
        title={title}
        tags={tags}
        imageUrl={imageUrl}
        setTitle={setTitle}
        setTags={setTags}
        setImageUrl={setImageUrl}
      />
    </>
  );
}

export default App;
