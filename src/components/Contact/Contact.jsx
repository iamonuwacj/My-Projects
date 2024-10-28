import React from 'react'
import { styled } from 'styled-components'
import { CiMail} from 'react-icons/ci'
import { FaLinkedinIn} from 'react-icons/fa'

const Contact = ({toggleState}) => {
  return (
    <ContactContainer id='contact' style={{color: toggleState ? "white" : "black"}}>
        <ContactMe>
            <p>Get in touch</p>
            <h2>Contact Me</h2>
        </ContactMe>

        <form action="">
            <ShootMail style={{backgroundColor: toggleState ? "white" : "#222"}}>
                <div className='iconBox'>
                    <CiMail color='white' size={30}/>
                </div>
                <div className='mailLinks'>
                    <a 
                        style={{color: toggleState ? "black" : "white"}}
                        href="mailto:iamonuwacj@gmail.com">iamonuwacj@gmail.com</a>
                </div>
                <div className='iconBox'>
                    <FaLinkedinIn color='white' size={30}/>
                </div>

                <div className='mailLinks'>
                    <a 
                        style={{color: toggleState ? "black" : "white"}}
                        href="https://linkedin.com">Linkedin</a>
                </div>
            </ShootMail>
        </form>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    justify-content: center;

    form {
        width: 42%;
    }
`

const ContactMe = styled.div`
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;

    h2{
        font-size: 40px;
    }
`

const ShootMail = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    padding-left: 20px;
    border: 2px solid gray;
   

    .iconBox {
        background-color: black;
        width: 20%;
        margin-right: 10px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    .mailLinks {
        width: fit-content;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
        padding: 25px 0;

        a {
            font-size: 20px;
            color: black;
        }
    }
`

export default Contact