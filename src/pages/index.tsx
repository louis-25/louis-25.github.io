import Template from 'components/Common/Template'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import { PostListItemType } from 'types/PostItem.types'
import { graphql } from 'gatsby'
import Header from 'components/Common/Header'
import styled from '@emotion/styled'
import Title from 'components/Common/Title'
import Welcome from '../images/welcome.jpg'
import Particles, { ISourceOptions } from 'react-tsparticles'

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
  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 5000,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      number: {
        value: 200,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: '#fff',
        animation: {
          enable: false,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: false,
          speed: 3,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
      },
      links: {
        enable: false,
        distance: 100,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        angle: {
          value: 10,
          offset: 0,
        },
        enable: true,
        speed: 5,
        direction: 'right',
        random: false,
        straight: true,
        outModes: {
          default: 'out',
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      zIndex: {
        value: 0,
        opacityRate: 0.5,
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
          groups: ['z5000', 'z7500', 'z2500', 'z1000'],
        },
        remove: {
          quantity: 2,
        },
      },
    },
    detectRetina: true,
    background: {
      color: '#000000',
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
    emitters: {
      position: {
        y: 55,
        x: -30,
      },
      rate: {
        delay: 7,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        shape: {
          type: 'images',
          options: {
            images: [
              {
                src: 'https://particles.js.org/images/amongus_blue.png',
                width: 205,
                height: 267,
              },
              {
                src: 'https://particles.js.org/images/amongus_cyan.png',
                width: 207,
                height: 265,
              },
              {
                src: 'https://particles.js.org/images/amongus_green.png',
                width: 204,
                height: 266,
              },
              {
                src: 'https://particles.js.org/images/amongus_lime.png',
                width: 206,
                height: 267,
              },
              {
                src: 'https://particles.js.org/images/amongus_orange.png',
                width: 205,
                height: 265,
              },
              {
                src: 'https://particles.js.org/images/amongus_pink.png',
                width: 205,
                height: 265,
              },
              {
                src: 'https://particles.js.org/images/amongus_red.png',
                width: 204,
                height: 267,
              },
              {
                src: 'https://particles.js.org/images/amongus_white.png',
                width: 205,
                height: 267,
              },
            ],
          },
        },
        size: {
          value: 40,
        },
        move: {
          speed: 10,
          outModes: {
            default: 'destroy',
            left: 'none',
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
  }

  return (
    <Template title="Louis's Blog" description="개발용 블로그입니다">
      {/* <Particles options={options} /> */}
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
