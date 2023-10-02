import React, {  Fragment } from 'react'
import Footer from './Footer'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <Fragment>
        <MainNavigation/>
      
      <div>{props.children}</div>
      <br/>
      <Footer/>
    </Fragment>
  )
}

export default Layout
