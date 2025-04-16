import "./assets/css/App.css";
import info from "./assets/data/information";
import { useEffect, useState } from "react";
import List from "./components/List.jsx";
import BlankPage from "./components/BlankPage.jsx";
import Details from "./components/Details.jsx";

function App() {
  let [name, setName] = useState(null);
  let [prevName, setPrevName] = useState(null);

  useEffect(() => {
    if (name !== prevName) {
      setPrevName(name);
    }
  }, [name])

  return (
    <>
      <div className='page'>
        {name != null? (
          <Details 
            information = {info.find(item => item.name == name)}
            setName = {setName}
          />
        ) : (
          <BlankPage/>
        )}
        <List setName = {setName}/>
      </div>
    </>
  )
}

export default App
