import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterComponent = styled.footer`
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
  padding: 50px 0;
  margin-top: 50px;

  body.dark & {
    background: rgba(0, 0, 0, 0.3);
  }
`

const FooterContent = styled.div`
  width: 768px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const ContentLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Footer: FunctionComponent = function () {
  let now = new Date()
  let year = now.getFullYear()
  return (
    <FooterComponent>
      <FooterContent>
        <ContentLine>
          <div>
            <b>Louis's Blog</b>
          </div>
        </ContentLine>

        <ContentLine>
          <div>ⓒ {year} Louis powered by Gatsby</div>
        </ContentLine>
      </FooterContent>
    </FooterComponent>
  )
}

export default Footer
