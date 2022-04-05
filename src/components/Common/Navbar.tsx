import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Link, { LinkComponent } from '../atom/Link'
import Text, { TextComponent } from '../atom/Text'

export const NavBarComponent = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;

  ${TextComponent} {
    cursor: pointer;
    font-size: 15px;
  }

  ${LinkComponent} + ${TextComponent},
  ${LinkComponent} + ${LinkComponent} {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    ${TextComponent} {
      font-size: 13px;
    }
  }
`

const NavBar: FunctionComponent = function () {
  return (
    <NavBarComponent>
      <Link to="/blog/">
        <Text>Blog</Text>
      </Link>
      <Link to="/about/">
        <Text>About</Text>
      </Link>
    </NavBarComponent>
  )
}

export default NavBar
