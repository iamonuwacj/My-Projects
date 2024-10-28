import React from 'react'
import styled from 'styled-components'

const Copywrite = ({toggleState}) => {
  return (
    <Copy style={{color: toggleState ? "white" : "black"}}>
        <p>© 2024 Onuwa Chinedu.</p>
        <p>All rights reserved.</p>
    </Copy>
  )
}

const Copy = styled.footer`
    text-align: center;
    line-height: 1.8;
    padding-top: 20px;
`

export default Copywrite