import React, {useState} from "react"
import './App.css';

function App() {
  const [plots, setplots] = useState([])

  

  return (
    <>
      <h1>Travis' Garden</h1>
      {plots.map((plot, index) => {
        return (<article>
          <h3>{plot.title}</h3>
        </article>)
      })}
    </>
  );
}

export default App;
