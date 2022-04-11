import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent, ReactNode } from 'react'
import IconButtonBar from './icon-button-bar'
import ProfileImage from './ProfileImage'

type ProfileSectionProps = {
  gatsbyImageData: IGatsbyImageData
  children: ReactNode
}

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
const ProfileSection: FunctionComponent<ProfileSectionProps> = ({
  gatsbyImageData,
  children,
}) => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileBox2>
          <ProfileDiv>
            <ProfileImage profileImage={gatsbyImageData}></ProfileImage>
            <ProfileDetail>
              <h2>Louis</h2>
              <IconButtonBar links={social} />
            </ProfileDetail>
          </ProfileDiv>
        </ProfileBox2>
        <CategoryWrapper>Category</CategoryWrapper>
        {children}
      </ProfileBox>
    </ProfileContainer>
  )
}

export default ProfileSection
