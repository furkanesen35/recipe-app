import React from 'react'
import defaultImage from "../../assets/default-image.jpg"
import CardStyle,{Card, Header, MainContainer,Image, Button} from "./Card.style"

const Cards = ({recipes}) => {
 return (
  <MainContainer wrap="wrap">
   {recipes.map(({recipe},index)=>(
     <Card key={index}>
      <Header>{recipe.label}</Header>
      <Image src={recipe.image || defaultImage} />
      <Button>View more</Button>
     </Card>
   ))}
  </MainContainer>
 )
}

export default Cards