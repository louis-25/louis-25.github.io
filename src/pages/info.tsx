import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Text from 'components/Text'

// gatsby에서 data라는 키값에 맞는 데이터를 가져와줌
type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
    </div>
  )
}

export default InfoPage

// 요청한 데이터는 props로 반환된다
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
