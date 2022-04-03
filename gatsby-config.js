module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      // typescript 플러그인 추가
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-image`, // GatsbyImage태그 사용하여 이미지 출력
    `gatsby-transformer-sharp`, // gatsby-plugin-image와 호환되는 GraphQL유형 필드 제공
    {
      // 이미지 최적화 및 GraphQL에 추가
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // 마크다운 파일 위치할 디렉토리 탐색
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      // static폴더의 이미지 인식
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      // 마크다운 HTML로 변환 세팅
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            // gatsby-plugin-image에서 사용될 데이터
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`, // Meta태그 설정
    `gatsby-plugin-advanced-sitemap`, // sitemap 웹 접근성 향상
    {
      resolve: 'gatsby-plugin-canonical-urls', // 중복된 페이지에서 가장 대표되는 URL지정해주는 기능
      options: {
        siteUrl: '<https://louis-25.github.io/>',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt', // robots.txt 검색엔진 세팅
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
