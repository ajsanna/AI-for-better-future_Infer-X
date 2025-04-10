import "./assets/css/App.css";
import List from "./components/List.jsx";
import Details from "./components/Details.jsx";

function App() {
  return (
    <>
      <div className='page'>
        <Details/>
        <List/>
      </div>
    </>
  )
}

export default App
