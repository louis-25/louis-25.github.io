import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Markdown from 'components/Common/Markdown'
import TableOfContents from 'components/Common/TableOfContents'

interface PostContentProps {
  html: string
  toc: string
}
const Content = styled.div`
  width: 768px;
  height: 100%;
  margin: 80px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({
  html,
  toc,
}) {
  return (
    <Content>
      <Markdown html={html} />
      <TableOfContents toc={toc} />
    </Content>
  )
}

export default PostContent
