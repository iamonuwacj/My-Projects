import React from 'react'
import {styled} from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../../Images/profile.jpeg'
import profile_pic from '../../Images/native.jpeg'

const Hero = ({toggleState}) => {
  return (
    <Container>
        <HeroContent>
          <Intro style={{color: toggleState ? "white" : "black"}}>
            <p>Hello I'm</p>
            <h1>Onuwa Chinedu</h1>
            <h3>Frontend Developer</h3>
          </Intro>
          <div className='cv'>
            <Download 
              style={{backgroundColor: toggleState ? "#fff" : "#222", 
                color: toggleState ? "black" : "white"}}>
              <a href="../../Images/cv_updated.pdf" style={{color: toggleState ? "black" : "white"}} download={true}>Download CV</a>
            </Download>

            <Contact
              style={{backgroundColor: toggleState ? "black" : "#0987f2", color: toggleState ? "black" : "white"}}
            >
              <a href="#contact" style={{color: toggleState ? "white" : "black"}}>Contact Info</a>
            </Contact>
          </div>

          <Icons style={{color: toggleState ? "white" : "black"}}>
            <a href='https://github.com' style={{color: toggleState ? "white" : "black"}}>
              <FaGithub size={35} className='icons'/></a>

            <a href='https://www.linkedin.com/in/iamonuwacj/' style={{color: toggleState ? "white" : "black"}}>
              <FaLinkedin size={35} className='icons'/></a>
          </Icons>
        </HeroContent>
          
        <HeroImg>
          <img src={ toggleState ? profile : profile_pic } alt="" />
        </HeroImg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 10%;
  justify-content: space-between;
  align-items: center;
  height: 69vh;
  position: relative;
  /* flex-wrap: wrap-reverse; */

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap-reverse;
    margin-top: 20%;
    height: 100vh;
  }
`

const HeroContent = styled.div`

  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12% 0;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  .cv {
    display: flex;
    width: 100%;
    gap: 2%;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;

    a {
      font: bold;
    }
  }
`

const Intro = styled.div`

  text-align: center;
  margin-bottom: 20px;
  

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 40px;
  }

  h3 {
    font-size: 22px;
  }
`

const HeroImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  border-radius: 50%;
  padding: 10px;

  background-color: green;

  @media screen and (max-width: 1200px) {
    width: 70%;
    margin: auto;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
`

const Download = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  transition-duration: 0.3s;

  a {
    font-size: 18px;
  }
  &:hover {
    transform: scale(1.05);
  }
`

const Contact = styled(Download)`
  /* background-color: black; */
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  margin-top: 10px;
  justify-content: center;
  width: 100%;
`
export default Hero
