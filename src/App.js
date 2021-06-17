import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import axios from 'axios';
 
function App() {
  const [search, setSearch] = useState("Potato")
  const [recipe, setRecipe] =useState([])
  const APP_ID="2c5b837a"
  const APP_KEY ="9ce06ed6cfc3d9abb7a6a0b2adb508c3"

  useEffect( ()=>{
     getRecipe()
  },[]
  )

  const getRecipe = async ()=>{
    console.log("app initialised")
    const res = await axios.get (`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    console.log("axios", res)
    setRecipe(res.data.hits)
  }
  const onInputChange = e =>{
         console.log(e.target.value)
         setSearch(e.target.value)
  }

  const onSearchClick = ()=>{
    getRecipe()
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <br/>
      <div className="container">
           <Recipe recipe={recipe} />
      </div>
    </div>
  );
}

export default App;
