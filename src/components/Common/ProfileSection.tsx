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
  width: 250px;
  margin-top: 50px;
  left: -17rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
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

const ProfileContent = styled.div`
  @media (max-width: 1350px) {
    margin-left: 20px;
  }
`

const ProfileContainer = styled.div`
  width: 768px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0px 20px;
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
          <ProfileImage profileImage={gatsbyImageData}></ProfileImage>
          <ProfileContent>
            <h2>Louis</h2>
            <IconButtonBar links={social} />
          </ProfileContent>
        </ProfileBox2>
        {children}
      </ProfileBox>
    </ProfileContainer>
  )
}

export default ProfileSection
