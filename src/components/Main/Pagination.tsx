import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type PagenationProps = {
  postPerPage: number
  totalPosts: number
  paginate: Function
}

const NAV = styled.nav`
  margin: auto;
`

const UL = styled.ul`
  margin: auto;
  display: flex;
`

const LI = styled.li`
  background: #dedede;
  overflow: hidden;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Pagination: FunctionComponent<PagenationProps> = ({
  postPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <NAV>
      <UL>
        {pageNumbers.map(num => (
          <LI key={num}>
            <Link
              onClick={e => {
                e.preventDefault()
                paginate(num)
              }}
              to="/"
            >
              {num}
            </Link>
          </LI>
        ))}
      </UL>
    </NAV>
  )
}

export default Pagination
