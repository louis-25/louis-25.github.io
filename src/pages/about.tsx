import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import '/src/styles/index.scss'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Template from 'components/Common/Template'
import Header from 'components/Common/Header'
import Bio from 'components/Common/bio'
import TimeStampSection from 'components/About/timestamp-section/index'
import styled from '@emotion/styled'

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
    file: { publicURL },
  },
}) {
  const InnerBox = styled.div`
    width: 768px;
    margin: auto;

    @media (max-width: 768px) {
      width: 100%;
    }
  `
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <InnerBox>
        <Header></Header>
        <Bio />
        <TimeStampSection />
      </InnerBox>
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
