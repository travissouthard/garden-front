import React, {useState, useEffect} from "react"
import Plot from "./components/Plot"
import PlotForm from "./components/PlotForm"

let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://xpense-backend.herokuapp.com';
}
// console.log('current base URL:', baseUrl);

function App() {
  const [plots, setPlots] = useState([])
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [imageUrl, setImageUrl] = useState("")

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

  let handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted!")
  }

  useEffect(() => {
    getGarden()
  })

  return (
    <>
      <h1>Travis' Garden</h1>
      {plots.map((plot, index) => {
        return <Plot plot={plot} key={index}/>
      })}
      <PlotForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
