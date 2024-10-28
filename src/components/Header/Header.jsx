import React from 'react'
import {styled} from 'styled-components'
import { MdDarkMode, MdLightMode} from 'react-icons/md'
// import { CiLight } from 'react-icons/ci'
// import { MdLightMode } from 'react-icons/md'

const Header = ({toggleState, changeState}) => {
  return (
    <Container>
        <h2 style={{color: toggleState ? "#bbb" : "black"}}>Onuwa Chinedu</h2>
        
        <NavLinks >

            <li>
                <a href="#about" style={{color: toggleState ? "#bbb" : "black"}}>About</a>
            </li>
            <li>
                <a href="#skills" style={{color: toggleState ? "#bbb" : "black"}}>Skills</a>
            </li>
            <li>
                <a href="#projects" style={{color: toggleState ? "#bbb" : "black"}}>Projects</a>
            </li>
            <li>
                <a href="#contact" style={{color: toggleState ? "#bbb" : "black"}}>Contact</a>
            </li>

        </NavLinks>

        {
            toggleState ?
                <MdDarkMode className='theme' size={30} onClick={changeState} color='white'/>
            :
                <MdLightMode className='theme' size={30} onClick={changeState}/>
        }

        
        {/* <CiLight /> */}
    </Container>
  )
}

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
   

    h2 {
        width: 50%;
    }

    .theme {
        width: 8%;
    }
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 42%;
    gap: 8%;
    
    @media screen and (max-width: 600px){
        display: nonet;
    }

    li {
        padding: 10px 0;
        list-style: none;

        &:hover {
            border-bottom: 2px solid black;
        }

        a {
            text-decoration: none;
            color: black;
            font-size: 18px;
            font-weight: bold;
        }
    }
`
export default Header