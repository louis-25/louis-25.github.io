import Template from 'components/Common/Template'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import { PostListItemType } from 'types/PostItem.types'
import { graphql } from 'gatsby'
import Header from 'components/Common/Header'
import styled from '@emotion/styled'
import Title from 'components/Common/Title'
import Welcome from '../images/welcome.jpg'

type BlogPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const blog: FunctionComponent<BlogPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  // URL쿼리 파싱
  const InnerBox = styled.div`
    width: 768px;
    margin: auto;

    @media (max-width: 768px) {
      width: 100%;
    }
  `
  const MainImg = styled.img`
    width: 100%;
  `
  return (
    <Template title="Louis's Blog" description="개발용 블로그입니다">
      <InnerBox>
        <Header></Header>
        <Title
          title={`어서오세요.`}
          subTitle="louis-25의 개발용 블로그입니다."
        />
        <MainImg src={Welcome} />
      </InnerBox>
    </Template>
  )
}

export default blog

export const getPostList = graphql`
  query getIndexPost {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
