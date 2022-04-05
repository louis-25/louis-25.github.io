import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Markdown from 'components/Common/Markdown'
import TableOfContents from 'components/Common/TableOfContents'

interface PostContentProps {
  html: string
  toc: string
}
const Content = styled.div`
  margin: 150px 0;
  display: grid;
  grid-template-columns: 768px 250px;
  grid-gap: 30px;

  @media (max-width: 1350px) {
    display: block;
  }

  @media (max-width: 768px) {
    margin: 80px 0;
  }
`
const ContentBox = styled.main`
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    overflow: auto;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({
  html,
  toc,
}) {
  return (
    <ContentBox>
      <Content>
        <Markdown html={html} />
        <TableOfContents toc={toc} />
      </Content>
    </ContentBox>
  )
}

export default PostContent
