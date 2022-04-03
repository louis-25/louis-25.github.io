import styled from '@emotion/styled'
import Header from 'components/Common/Header'
import Template from 'components/Common/Template'
import React, { FunctionComponent } from 'react'

type aboutProps = {}

const AboutContainer = styled.div`
  margin: 0 auto;
  width: 768px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const about: FunctionComponent<aboutProps> = () => {
  return (
    <Template title="about" description="about페이지 입니다">
      <Header></Header>
      <AboutContainer>
        <h1>About 페이지</h1>
      </AboutContainer>
    </Template>
  )
}

export default about
