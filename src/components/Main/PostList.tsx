import React, { FunctionComponent, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import Pagination from './Pagination'
import { PostListItemType } from 'types/PostItem.types'

//post에서 사용되는 데이터로 index페이지에서도 형식을 맞춰주기 위해 export로 작성
type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  //카테고리별 post데이터 추출
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지
  const [postPerPage] = useState(10) //페이지당 포스트 개수

  //현재 페이지 가져오기
  const indexOfLastPost: number = currentPage * postPerPage // 1*10 = 10번 포스트
  const indexOfFirstPost: number = indexOfLastPost - postPerPage //10 - 10 = 0번 포스트
  const currentPosts = postListData.slice(indexOfFirstPost, indexOfLastPost) //0~10번까지 포스트

  const paginate = (pageNum: number) => setCurrentPage(pageNum)
  return (
    <>
      <PostListWrapper>
        {currentPosts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            // <div>hello</div>
            <PostItem {...frontmatter} link={slug} key={id} />
          ),
        )}
      </PostListWrapper>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  )
}

export default PostList
