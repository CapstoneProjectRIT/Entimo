
import React from 'react'
import {withRouter} from 'react-router';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import logo from '../../assets/ENTIMO30.png'
import GLogo from '../../assets/Google_Logo.png'
import FbLogo from '../../assets/Fb_Logo.png'
import leftimage from '../../assets/LoginBackground.png';
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
function Login() {
    return (
        <Container>
            <Incontainer>
                <>
            <Leftcontainer>
                <Logo></Logo>
                <Welcome>Welcome Back</Welcome>
            </Leftcontainer>
            <Logintext>Login</Logintext>
            <Credential>
                <Emailtext>
                <Text >Email</Text>
                </Emailtext>
                <Email><StyledInput type="email" placeholder="Enter Email"></StyledInput></Email>
            <Password><Text>Password</Text></Password>
            <PasswordInput><StyledInput type="password" placeholder="Enter Password"></StyledInput></PasswordInput>
            </Credential>
            <ForgotPassword>ForgotPassword?</ForgotPassword>
            <BottomContainer>
                <LoginButon><ButtonText>Login</ButtonText></LoginButon>
                <Text style={{marginTop: 36}}>Or Login With</Text>
                
                <div style={{display: 'flex'}}>
                <Gcontainer>
                    <Glogo></Glogo>
                    <Text>Google</Text>
                    
                </Gcontainer>
                <Gcontainer>
                    <FBlogo></FBlogo>
                    <Text>Facebook</Text>
                </Gcontainer>
                </div>
                <div style={{marginTop: 36, display: 'flex'}}>
                <Text >Dont have an account?</Text>
             <Link to="/signup" >  <Text style={{color: '#1976D2'}} >Create an account</Text></Link>
                </div>
            </BottomContainer>
            </>
            </Incontainer>
        </Container>
    )
}

export default withRouter(Login)
const Container= styled.div
`
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;
background: white;

`
const Incontainer= styled.div
`
box-sizing: border-box;
max-width: 1440px;
height: 100%;
min-height: 900px;
background: transparent;
margin: 0 auto;
`

const Leftcontainer= styled.div
`
position: absolute;
width: 720px;
height: 100%;
min-height: 900px;
left: 0px;
background-repeat: no-repeat;
background-size: cover;
top: 0px;

background-image: url(${leftimage});
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

const Welcome= styled.h1
`
position: absolute;
width: 396px;
height: 222px;
left: 120px;
top: 198px;

font-family: Poppins;
font-style: normal;
font-weight: 900;
font-size: 74.2px;
line-height: 111px;
text-transform: uppercase;

color: #000000;
`
const Logintext= styled.h1
`
position: absolute;
width: 173px;
height: 72px;
left: 825px;
top: 175px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 72px;
/* identical to box height */


color: #000000;  
`
const Credential= styled.div
`position: absolute;
width: 425px;
height: 209px;
left: 823px;
display: flex;
flex-direction: column ;
top: 317px;
`

const Text= styled.text
`font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`

const StyledInput= styled.input
`
height: 46px;
width: 421px;
background: #F7F6F9;
border-radius: 0px;
border: none;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: rgba(0, 0, 0, 0.5);
`

const Email= styled.div
`position: absolute;
left: 0.94%;
right: 0%;
top: 23.44%;
bottom: 54.55%;
`
const Password= styled.div
`position: absolute;
right: 76%;
top: 54.55%;
bottom: 31.1%;
`
const Emailtext= styled.div
`position: absolute;
left: 0.94%;
right: 85.88%;
top: 0%;
bottom: 85.65%;
`
const PasswordInput= styled.div
`position: absolute;
left: 0%;
right: 0.94%;
top: 77.99%;
bottom: 0%;
`

const ForgotPassword= styled.div
`position: absolute;
left: 827px;
right: 481px;
top: 526px;
bottom: 351px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 22px;
/* identical to box height */


color: #1976D2;

`
const BottomContainer= styled.div
`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
width: 464px;
height: 263px;
left: 802px;
top: 562px;
`

const LoginButon= styled.button
`

left: 4.53%;
right: 4.74%;
top: 0%;
height: 45px;
width: 421px;
left: 21px;
top: 0px;
border-radius: 0px;

bottom: 82.89%;
background: #000000;
`
const ButtonText= styled.text
`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
`
const Gcontainer=styled.button
`
width: 193px;
height: 50px;
box-sizing: border-box;
margin:15px;
border: 1px solid #fab9bc;
display: flex;
align-items: center;
justify-content: space-evenly;
background: rgba(255, 204, 207, 0.54);`

const Glogo= styled.div
`
height: 27.879310607910156px;
width: 39.49693298339844px;
background-image: url(${GLogo});
background-size: cover;
`
const FBlogo= styled.div
`
height: 27.879310607910156px;
width: 39.49693298339844px;
background-image: url(${FbLogo});
background-size: cover;
`