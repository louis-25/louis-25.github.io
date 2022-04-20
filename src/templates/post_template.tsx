import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'
import { PostListItemType, PostPageItemType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead from 'components/Blog/Post/PostHead'
import PostContent from 'components/Blog/Post/PostContent'
import CommentWidget from 'components/Blog/Post/CommentWidget'
import ProfileSection from 'components/Common/ProfileSection'
import CategoryList, { CategoryListProps } from 'components/Blog/CategoryList'
import styled from '@emotion/styled'
import Header from 'components/Common/Header'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    }
    file: {
      childImageSharp: {
        profileImage: IGatsbyImageData
      }
    }
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { profileImage },
    },
  },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary, // 나중에 사용할 예정입니다!
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
      tableOfContents,
    },
  } = edges[0]

  const InnerBox = styled.div`
    width: 768px;
    margin: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  `
  const PostListWrapper = styled.div`
    padding-top: 50px;
  `
  return (
    <Template>
      <InnerBox>
        <Header></Header>
        <ProfileSection></ProfileSection>
        <PostListWrapper>
          <PostHead
            title={title}
            date={date}
            categories={categories}
            thumbnail={gatsbyImageData}
          ></PostHead>
          <PostContent html={html} toc={tableOfContents} />
          <CommentWidget />
        </PostListWrapper>
      </InnerBox>
    </Template>
  )
}

export default PostTemplate

/* 
GraphQL에서 $를 붙여 파라미터값을 가져올 수 있다
eq는 equal의 줄임표현
*/
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
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
          tableOfContents
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        profileImage: gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
