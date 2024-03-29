import React from 'react'
import defaultImage from "../../assets/default-image.jpg"
import {Card, Header, MainContainer,Image, Button} from "./Card.style"
import { useNavigate } from 'react-router-dom'

const Cards = ({recipes}) => {
 const navigate = useNavigate();
 return (
  <MainContainer wrap="wrap">
   {recipes.map(({recipe},index)=>(
     <Card key={index}>
      <Header>{recipe.label}</Header>
      <Image src={recipe.image || defaultImage} />
      <Button onClick={() => navigate("detail", {state:recipe,replace:false})} >View more</Button>
     </Card>
   ))}
  </MainContainer>
 )
}

export default Cards