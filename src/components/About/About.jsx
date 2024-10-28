import React from 'react'
import { styled } from 'styled-components'
import hero from '../../profile-pic.png'

const About = ({toggleState}) => {
  return (
    <AboutContainer id='about' style={{color: toggleState ? "white" : "black"}}>
        <header>
            <p>Get to know more</p>
            <h1>About Me</h1>
        </header>

        <AboutMe>
            <div className='about-row'>
                <div className='about-img'>
                    <img src={hero} alt="" />
                </div>
                <div className='contentBox'>
                    <div className='honors'>
                        <div className='experience'>
                            <p></p>
                            <h3>Experience</h3>
                            <p>2+ years <br /> FrontEnd Development</p>
                        </div>
                        <div className='education'>
                            <p></p>
                            <h3>Education</h3>
                            <p>HND. Higher National Diploma</p>
                        </div>

                        <div className="aboutBox">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AboutMe>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
    height: 100vh;
    /* background-color: green; */
    margin-top: 9%;
    text-align: center;
    height: 100vh;

    header {
        padding: 5px 0;
        margin-bottom: 10%;
        
        h1 {
            font-size: 50px;
        }

        p {
            padding: 10px;
        }
    }
`

const AboutMe = styled.div`
    display: flex;
    margin-top: 80px;

    .about-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .about-img {
            width: 35%;
            background-color: gray;

            img {
                width: 100%;
            }
        }

        .contentBox {
            width: 60%;

            .honors {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                

                .experience {
                    width: 48%;
                    border: 2px solid gray;
                    padding: 20px 0;
                    margin-bottom: 20px;
                    border-radius: 20px;
                    line-height: 1.5;
                }
                .education {
                    width: 48%;
                    border: 2px solid gray;
                    padding: 30px 0;
                    margin-bottom: 20px;
                    border-radius: 20px;
                    line-height: 1.5;
                }
                .aboutBox {
                    text-align: left;
                    line-height: 1.5;
                }
            }
        }
    }
`
export default About