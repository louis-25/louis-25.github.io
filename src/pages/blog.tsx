import Template from 'components/Common/Template'
import PostList from 'components/Blog/PostList'
import React, { FunctionComponent } from 'react'
import queryString, { ParsedQuery } from 'query-string'
import { PostListItemType } from 'types/PostItem.types'
import { graphql } from 'gatsby'
import Header from 'components/Common/Header'
import styled from '@emotion/styled'
import ProfileSection from 'components/Common/ProfileSection'

type BlogPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const blog: FunctionComponent<BlogPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // URL쿼리 파싱
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category //category값 가져오기
      ? 'All'
      : parsed.category

  const InnerBox = styled.div`
    width: 768px;
    margin: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  `

  return (
    <Template title="Louis's Blog" description="개발용 블로그입니다">
      <InnerBox>
        <Header></Header>
        <ProfileSection></ProfileSection>
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </InnerBox>
    </Template>
  )
}

export default blog

export const getPostList = graphql`
  query getPostList {
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
  }
`
