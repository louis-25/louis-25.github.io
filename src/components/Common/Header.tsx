import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import NavBar from './Navbar'

type HeaderProps = {}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  height: 50px;
`

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <div>Louis's Blog</div>
      <NavBar></NavBar>
    </HeaderContainer>
  )
}

export default Header
