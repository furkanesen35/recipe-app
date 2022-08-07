import React,{useState} from 'react'
import LoginStyle, { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from "./Login.style"
import mealSvg from "../../assets/meal.svg"
import {useNavigate} from "react-router-dom"

const Login = () => {
 const navigate = useNavigate();
 const userInfo = {
  username:"ahmet"
 }
 const [username, setUsername] = useState()
 const [password, setPassword] = useState()
 const handleSubmit = (e) => {
  e.preventDefault();
  sessionStorage.setItem("user",JSON.stringify(userInfo))
  navigate(-1);
 }
 return (
  <LoginContainer>
   <FormContainer>
    <StyledImg src={mealSvg} />
    <Header>{"Recipe App"}</Header>
    <StyledForm onSubmit={handleSubmit}>
     <StyledInput type="username" onChange={(e)=>setUsername(e.target.value)} placeholder='Username...' required/>
     <StyledInput type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password...' required/>
     <StyledButton type='submit'>Login</StyledButton>
    </StyledForm>
   </FormContainer>
  </LoginContainer>
 )
}

export default Login