import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import classNames from 'classnames'
import './Pagination.scss'

type PagenationProps = {
  postPerPage: number // 한 페이지에 보이는 post
  totalPosts: number // 총 post수
  currentPage: number // 현재 페이지
  paginate: Function
}

const Pagination: FunctionComponent<PagenationProps> = ({
  postPerPage,
  totalPosts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [] // 총 page수

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(num => (
          <li
            key={num}
            className={classNames('pagination_item', {
              pagination_currPage: currentPage === num,
            })}
            onClick={() => {
              paginate(num)
              window.scrollTo(0, 0)
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
