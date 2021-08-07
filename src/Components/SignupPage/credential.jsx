import React from 'react';
import styled from 'styled-components';
import img from '../../assets/Google_Logo.png';
import img2 from '../../assets/Fb_Logo.png';
import {Link} from "react-router-dom"



class credential extends React.Component {
    render() {
        return (
            <>
            
            <Signup>SignUp</Signup>
            <Container>
                <Fullname>Full Name</Fullname>
                <Fullnamecontainer placeholder="Full Name" style={{border: 'none'}} required>
                    
                </Fullnamecontainer>

                
               
                    <Emailtext>Email</Emailtext>
                    
                
                    <EmailAddress placeholder="Email" style={{border: 'none'}} required>

                    </EmailAddress>
                    
                

                <Password>Create Password</Password>
                
                
                    <PasswordText type="password" placeholder="Password" style={{border: 'none'}} required>

                    </PasswordText>
              

                    
                

            </Container>
            <BottomContainer>
                <LoginButon><ButtonText>Sign Up</ButtonText></LoginButon>
                <Text style={{marginTop: 36}}>Or SignUp With</Text>
                
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
                <Text >Already have an account?</Text>
             <Link to="/login" >  <Text style={{color: '#1976D2'}} >Login</Text></Link>
                </div>
            </BottomContainer>
            
            
           
           
            
            
            </>
            
        );
            
           
            
            
            
            
            
        
    }
}
export default credential

const Text= styled.text
`font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`
const Signup= styled.h1
`
/* SignUp */


position: absolute;
width: 173px;
height: 72px;
left: 825px;
top: 65px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 72px;
/* identical to box height */


color: #000000;   

`
const Container=styled.div
`
position: absolute;
width: 427px;
display: flex;
flex-direction: column ;
justify-content: space-between;
height: 319px;
left: 825px;
top: 180px;

`
const Fullname=styled.h2
`
/* Full Name */




font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`
const Fullnamecontainer=styled.input
`
/* Rectangle 3 */


margin-left: 10px;
width:421px;
height:46px;

background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: rgba(0, 0, 0, 0.5);

`



const Emailtext=styled.h2
`




font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;


`


const EmailAddress=styled.input
`


width:421px;
height:46px;
margin-left: 10px;
background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */



`

const Password=styled.h1
`
/* Password */





font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;
`


const PasswordText=styled.input
`
/* ********* */



margin-left: 10px;
background: #F7F6F9;


font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */



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
background-image: url(${img});
background-size: cover;
`
const FBlogo= styled.div
`
height: 27.879310607910156px;
width: 39.49693298339844px;
background-image: url(${img2});
background-size: cover;
`