import Header from 'components/Common/Header'
import React, { FunctionComponent } from 'react'

type aboutProps = {}

const about: FunctionComponent<aboutProps> = () => {
  return (
    <>
      <Header></Header>
      <h1>About 페이지</h1>
    </>
  )
}

export default about
