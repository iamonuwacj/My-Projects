import React from 'react'
import { styled } from 'styled-components'

const Skills = ({toggleState}) => {
  return (
    <Container id='skills' style={{color: toggleState ? "white" : "black"}}>
        <Header>
            <p>Explore My</p>
            <h1>Skills and Experience</h1>
        </Header>

        <SKillContainer>
            <div className="details">
                <h3 className='title'>Frontend Development</h3>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>HTML</h3>
                        <span>Experienced</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>CSS</h3>
                        <span>Experienced</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>Bootsrap</h3>
                        <span>Experienced</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>JavaScript</h3>
                        <span>Experienced</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>React</h3>
                        <span>Intermediate</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>Tailwind Css</h3>
                        <span>Basic</span>
                    </div>
                </Skill>
                
            </div>
            <div className="details">
                <h3 className='title'>Frontend Development</h3>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>Git</h3>
                        <span>Experienced</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>Redux</h3>
                        <span>Intermediate</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>jQuery</h3>
                        <span>intermediate</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>Styled Components</h3>
                        <span>Intermediate</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>Jest</h3>
                        <span>Basic</span>
                    </div>
                </Skill>
                <Skill>
                    <div className="tic-mark">

                    </div>
                    <div className="skill">
                        <h3>SASS</h3>
                        <span>Basic</span>
                    </div>
                </Skill>
            </div>
            
        </SKillContainer>
        
    </Container>
  )
}

const Container = styled.div`
    height: 90vh;
    position: relative;
`

const Header = styled.div`
    padding: 20px;
    text-align: center;
    line-height: 2;
    margin-bottom: 40px;
`

const SKillContainer = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    

    .details {
        width: 48%;
        border: 2px solid gray;
        border-radius: 20px;
        padding: 20px 10px;
        display: flex;
        flex-wrap: wrap;
        height: 45vh;

        .title {
            width: 100%;
            padding: 10px;
            text-align: center;
            font-size: 25px;
        }
    }
`

const Skill = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    

    .tic-mark{
        width: 30%;
        background-color: black;
        height: 5vh;
    }

    .skill{
        width: 60%;
        text-align: left;
    }

`

export default Skills