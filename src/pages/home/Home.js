import { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from '../../assets/home.svg';

const Home = () => {
 const [query, setQuery] = useState('egg');
 const [selectedMeal, setSelectedMeal] = useState("breakfast");
 const [recipes, setRecipes] = useState("");

 const APP_ID = "b9ede37b"
 const APP_KEY = "faed1dc7b33598d9310471fd417625ca"
 const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

 const getData = async () => {
  try {
   const { data } = await axios.get(url);
   setRecipes(data.hits);
  } catch (error) {
   console.log(error);
  }
 }

 useEffect(() => {
  getData()
 }, [])
 
 return (
  <div>
   <Header  />
  </div>
 );
};

export default Home;
