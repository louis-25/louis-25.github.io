import styled from '@emotion/styled'
import Header from 'components/Common/Header'
import Template from 'components/Common/Template'
import React, { FunctionComponent } from 'react'

type portfolioProps = {}

const PortfolioContainer = styled.div`
  margin: 0 auto;
  width: 768px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const portfolio: FunctionComponent<portfolioProps> = () => {
  return (
    <Template title="portfolio" description="portfolio페이지 입니다">
      <Header></Header>
      <PortfolioContainer>
        <h1>portfolio 페이지</h1>
      </PortfolioContainer>
    </Template>
  )
}

export default portfolio
