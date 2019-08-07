import * as React from 'react'
import Footer from './Footer'
// import Header from './Header'
import Navbar from './Navbar'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        navbar 자리
        <Navbar/>
        {children}
        <Footer/>
      </div>
    )
  }
}
export default Layout