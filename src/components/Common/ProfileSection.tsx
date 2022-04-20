import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'
import { useLocation } from '@reach/router'
import React, { FunctionComponent, ReactNode, useMemo } from 'react'
import IconButtonBar from './icon-button-bar'
import ProfileImage from './ProfileImage'
import CategoryList, { CategoryListProps } from 'components/Blog/CategoryList'
import { PostListItemType } from 'types/PostItem.types'

// type ProfileSectionProps = {
//   gatsbyImageData: IGatsbyImageData
//   children: ReactNode
// }

const ProfileBox = styled.div`
  position: absolute;
  width: 220px;
  margin-top: 50px;
  left: -15rem;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 1350px) {
    position: relative;
    width: 100%;
    left: 0;
    padding: 20px;
  }
`
const ProfileBox2 = styled.div`
  @media (max-width: 1350px) {
    display: flex;
    align-items: center;
  }
`

const ProfileContainer = styled.div`
  width: 768px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
  }
`
const CategoryWrapper = styled.h2`
  margin-top: 20px;
  border-top: 1px solid black;
`

const ProfileDiv = styled.div`
  text-align: center;

  @media (max-width: 1350px) {
    display: flex;
  }
`

const ProfileDetail = styled.div`
  @media (max-width: 1350px) {
    margin-top: 45px;
    margin-left: 20px;
  }
`
const social = {
  github: `https://github.com/louis-25`,
  email: `20151577@vision.hoseo.edu`,
}
const ProfileSection: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    {
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
  `)
  // URL쿼리 파싱
  const location = useLocation()
  const parsed: ParsedQuery<string> = queryString.parse(location.search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category //category값 가져오기
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      data.allMarkdownRemark.edges.reduce(
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
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileBox2>
          <ProfileDiv>
            <ProfileImage
              profileImage={data.file.childImageSharp.gatsbyImageData}
            ></ProfileImage>
            <ProfileDetail>
              <h2>Louis</h2>
              <IconButtonBar links={social} />
            </ProfileDetail>
          </ProfileDiv>
        </ProfileBox2>
        <CategoryWrapper>Category</CategoryWrapper>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
      </ProfileBox>
    </ProfileContainer>
  )
}

export default ProfileSection
