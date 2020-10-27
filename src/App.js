import React, {useState, useEffect} from "react"
import Plot from "./components/Plot"

let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003';
} else {
  baseUrl = 'https://xpense-backend.herokuapp.com';
}
// console.log('current base URL:', baseUrl);

function App() {
  const [plots, setPlots] = useState([])

  let getGarden = () => {
    fetch(baseUrl + "/garden/").then(res => {
      return res.json()
    }).then(data => {
      setPlots(data)
    })
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
    </>
  );
}

export default App;
