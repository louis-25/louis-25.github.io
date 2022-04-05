import React, { FunctionComponent } from 'react'
import ReactRotatingText from 'react-rotating-text'
import IconButtonBar from '../icon-button-bar'
import Profile from '/src/images/rakun.png'
import './style.scss'

type BioProps = {
  author?: {
    bio: {
      role: string
      description: string[]
      thumbnail: File // Path to the image in the 'asset' folder
    }
    social: {
      github: string
      linkedIn: string
      email: string
    }
    name: string
  }
  language?: string
}

const Bio: FunctionComponent<BioProps> = function ({
  author = {
    bio: {
      role: `개발자`,
      description: [
        '사람에 가치를 두는',
        '능동적으로 일하는',
        '이로운 것을 만드는',
      ],
      thumbnail: { Profile },
    },
    social: {
      portfolio: `https://dh-portfolio.netlify.app/`,
      github: `https://github.com/louis-25`,
      linkedIn: ``,
      email: `20151577@vision.hoseo.edu`,
    },
    name: `정동현`,
  },
  language = 'ko',
}) {
  if (!author) return null
  const { bio, social, name } = author
  return (
    <div className="bio">
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">
            안녕하세요.
            <br />
            <ReactRotatingText items={bio.description} />
            <br />
            {bio.role} <strong>{name}</strong>입니다.
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper">
        <img style={{ width: '250px', borderRadius: '50%' }} src={Profile} />
      </div>
    </div>
  )
}

export default Bio
