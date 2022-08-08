import { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from '../../assets/home.svg';

const Home = () => {
 const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
 const [query, setQuery] = useState('egg');
 const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
 const [recipes, setRecipes] = useState(null);

 const APP_ID = "b9ede37b";
 const APP_KEY = "faed1dc7b33598d9310471fd417625ca";

 const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

 const getData = async () => {
  if (query) {
   try {
    const { data } = await axios.get(url);
    setRecipes(data.hits);
   }
   catch (error) {
    console.log(error);
   }
  }
   else {
    alert('Please enter any meal type');
  }
 };

 return (
  <div>
   <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} getData={getData} />
   {!recipes && (
    <ImgDiv>
     <HomeImg src={homeSvg} />
    </ImgDiv>
   )}
   {recipes?.length === 0 && (
    <HeaderText>The Food cannot be found</HeaderText>
   )}
   {recipes?.length > 0 && <Cards recipes={recipes} />}
  </div>
 );
};

export default Home;
