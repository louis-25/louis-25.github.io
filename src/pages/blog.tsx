import Template from 'components/Common/Template'
import CategoryList, { CategoryListProps } from 'components/Blog/CategoryList'
import PostList from 'components/Blog/PostList'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent, useMemo } from 'react'
import queryString, { ParsedQuery } from 'query-string'
import { PostListItemType } from 'types/PostItem.types'
import { graphql } from 'gatsby'
import Header from 'components/Common/Header'
import Title from 'components/Common/Title'
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
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category //category값 가져오기
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        //GraphQL의 edges배열
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )
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
        <ProfileSection gatsbyImageData={gatsbyImageData}>
          <CategoryList
            selectedCategory={selectedCategory}
            categoryList={categoryList}
          />
        </ProfileSection>
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
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
