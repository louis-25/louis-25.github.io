import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import '../components/index.scss'
import Introduction from 'components/Main/Introduction'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Template from 'components/Common/Template'
import Header from 'components/Common/Header'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Header></Header>
      {/* <NavBar></NavBar> */}
      <Introduction profileImage={gatsbyImageData} />
    </Template>
  )
}

export default IndexPage

export const getIndexInfo = graphql`
  query getIndexInfo {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
