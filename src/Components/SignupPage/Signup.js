import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import img from '../../assets/LoginBackground.png'
import logo from '../../assets/ENTIMO30.png'
import Credential from './credential';
import Data from './data';

class SignUp extends React.Component{
    render()
    {
        return (
        <Container>
        <Leftcontainer>
          

          <Logo></Logo>
          <Credential/>
          <Data/>
         
          
        </Leftcontainer>
        </Container>
          
        )
             
          
    }
   
    
}
export default SignUp;

const Container= styled.div
`
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;
background: white;
margin: 0 auto;

`
const Leftcontainer= styled.div
`
position: absolute;
width: 720px;
height: 100%;
background-repeat: no-repeat;
background-size: cover;
min-height: 900px;
left: 0px;
top: 0px;

background-image: url(${img});
`

const Logo= styled.div
`
position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`
  
 


    
  