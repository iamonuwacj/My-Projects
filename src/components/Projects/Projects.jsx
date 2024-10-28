import React from 'react'
import styled from 'styled-components'

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
                    <img src="" alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Project Title
                    </ProjectTitle>

                <Links>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src="" alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Project Title
                    </ProjectTitle>

                <Links>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src="" alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Project Title
                    </ProjectTitle>

                <Links>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src="" alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Project Title
                    </ProjectTitle>

                <Links>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src="" alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Project Title
                    </ProjectTitle>

                <Links>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
                </Links>
            </Project>
            <Project>
                <ImgBox>
                    <img src="" alt="" />
                </ImgBox>
                    
                    <ProjectTitle>
                        Project Title
                    </ProjectTitle>

                <Links>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Github</a>
                    <a href="" style={{color: toggleState ? "white" : "black"}}>Live Link</a>
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
`

const Project = styled.div`
    width: 30%;
    margin-bottom: 5%;
    border: 2px solid gray;
    height: 65vh;
    padding: 30px;
    border-radius: 20px;
`

const ImgBox = styled.div`
    height: 40vh;
    background-color: blue;
    border-radius: 30px;
    transition-duration: .5s;

    &:hover {
        transform: scale(1.05);
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