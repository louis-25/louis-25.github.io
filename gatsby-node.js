const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}

// 게시글의 Slug데이터 생성
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({ node, name: 'slug', value: slug })
  }
}

// Markdown 데이터로 게시글페이지 생성
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Markdown의 모든 데이터의 Slug필드를 조회
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  )

  // 에러 핸들링
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // post템플릿 import
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  )

  // 페이지 생성 함수
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    }

    createPage(pageOptions)
  }

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}
