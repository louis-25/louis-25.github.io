import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import NavBar from './Navbar'

type HeaderProps = {}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 50px;
  width: 768px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <div>Louis's Blog</div>
      <NavBar />
    </HeaderContainer>
  )
}

export default Header
