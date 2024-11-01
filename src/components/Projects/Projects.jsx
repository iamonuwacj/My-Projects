import React from 'react'
import styled from 'styled-components'
import QuizImg from '../../Images/QuizApp.png'
import VideoImg from '../../Images/videoApp.png'
import ShopImg from '../../Images/shopNow.png'
import todoImg from '../../Images/todolist.png'
import multiPartImg from '../../Images/multiStep.png'
import memeImg from '../../Images/meme.png'

const Projects = ({toggleState}) => {
  return (
    <ProjectContainer id='projects' style={{color: toggleState ? "white" : "black"}}>
        <ProjectTitleDiv>
            <p>Browse My Recent</p>
            <h1>Projects</h1>
        </ProjectTitleDiv>

        <ProjectRow>
            <Project>
                <ImgBox>
                    <img src={QuizImg} alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Quiz App
                    </ProjectTitle>

                <Links>
                    <a href="https://github.com/iamonuwacj/QuizApp" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="https://quiz-app-ten-flax.vercel.app" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src={multiPartImg} alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Multi Step Form
                    </ProjectTitle>

                <Links>
                    <a href="https://github.com/iamonuwacj/multi-step-form" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="https://multi-step-form-pi-one.vercel.app" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src={todoImg} alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Todo List
                    </ProjectTitle>

                <Links>
                    <a href="https://github.com/iamonuwacj/TodoList" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="https://todo-list-ashen-delta-13.vercel.app" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src={memeImg} alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Meme Generator
                    </ProjectTitle>

                <Links>
                    <a href="https://github.com/iamonuwacj/memeGenerator" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="https://meme-generator-khaki-two.vercel.app" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src={VideoImg} alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Video App
                    </ProjectTitle>

                <Links>
                    <a href="https://github.com/iamonuwacj/video_app" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="https://video-app-chi-two.vercel.app" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src={ShopImg} alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Shop Now
                    </ProjectTitle>

                <Links>
                    <a href="https://github.com/iamonuwacj/shop_now" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="https://shop-now-bzs9.vercel.app" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            
            
        </ProjectRow>
        {/* <button>More Projects</button> */}
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 6%;
    flex-wrap: wrap;

    @media screen and (max-width: 1200px) {
        top: 40vh;
        margin-bottom: 20px;
    }
`

const ProjectTitleDiv = styled.div`
    text-align: center;
    line-height: 1.5;
    width: 100%;

    h1 {
        font-size: 55px;
        margin-bottom: 10px;
        padding-top: 14px;
    }
`

const ProjectRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 1200px) {

    }
`

const Project = styled.div`
    width: 30%;
    margin-bottom: 5%;
    border: 2px solid gray;
    height: 65vh;
    padding: 30px;
    border-radius: 20px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin-bottom: 40px;
    }
`

const ImgBox = styled.div`
    height: 40vh;
    background-color: blue;
    border-radius: 30px;
    transition-duration: .5s;

    &:hover {
        transform: scale(1.09);
    }

    img {
        width: 100%;
        height: 40vh;
        border-radius: 5px;
    }
`

const ProjectTitle = styled.h2`
    text-align: center;
    padding: 30px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        border: 2px solid gray;
        padding: 12px 20px;
        border-radius: 20px;
        width: 45%;
        text-align: center;
    }
`

export default Projects