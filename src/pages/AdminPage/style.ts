import styled from "styled-components";

export const MainPage = styled.div`
background-color:#EDF8E5;
font-family: 'Inter', sans-serif;
height: 100vh;
`

export const HeaderPage = styled.header`

nav{
    display: flex;
    justify-content: space-between;
    padding: 10px;

    h1{
        color: #046B0F
    }
}

button{
    color: #ffff;
    border: 1px solid  #046B0F;
    border-radius: 8px;
    background-color: #046B0F;
    padding: 5px  30px;
    font-size: 14px;
    font-weight: 600
}

`

export const ProfileSection = styled.section`

img{
    display: flex;
    height: 200px;
    border-radius: 80%
  
}

`
export const FormSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;

`