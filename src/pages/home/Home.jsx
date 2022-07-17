import React,{useEffect,useState} from 'react'
import HomeStyle from "./Home.style"
import axios from "axios"
import Header from '../../components/header/Header';

const Home = () => {
 const mealType = ["Breakfast","Lunch","Dinner","Snack","Teatime"]
 const [query, setQuery] = useState("egg");
 const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
 const [recipe, setRecipe] = useState("")
 const APP_ID = "b9ede37b";
 const APP_KEY = "faed1dc7b33598d9310471fd417625ca";
 const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`
 const getData = async() => {
  try {
   const {data} = await axios.get(url);
   setRecipe(data.hits);
  } 
  catch (error) {
   console.log(error);  
  }
 }
 useEffect(() => {
  getData()
 }, []);
 console.log(recipe);
 return (
  <div>
   <Header 
    setQuery={setQuery} 
    setSelectedMeal={setSelectedMeal} 
    mealType={mealType} 
    getData={getData}
    />
  </div>
 )
}

export default Home;