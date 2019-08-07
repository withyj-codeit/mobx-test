import { inject, observer } from 'mobx-react'
import * as React from 'react';
// import CheckAuthState from '../../CheckAuthState'
import Link from 'next/Link'

interface Props {
  userStore?: any
}

// interface NFC<Props> extends React.FC<Props> {
//   getInitialProps?: ({req}: { req: any; }) => {
    
//   }
// }

// interface NFC<Props> extends React.FC<Props> {
//   getInitialProps?: ({req}: { req: any; }) => Promise<{
//     isLoading: boolean;
//     hasErrored: boolean; speakers: any; isServer: boolean;
//   } | {
//     speakers: never[]; hasErrored: boolean; isServer: boolean; errorMessage: any;
//   }>
// }

const Navbar: React.FC<Props> = (props:any) => {
  const { authStore } = props
  console.log("Navbar: ", authStore)
  return (
    <div className="navbar-wrapper">
      Navbar
      <br/>
      <Link href='/'>
        <a>Main index 로 이동</a>
      </Link> | |
      <Link href='/login'>
        <a>Login으로 이동</a>
      </Link> | |
      <Link href='/home'>
        <a>Home으로 이동</a>
      </Link>
      <br/>
      {/* { authStore } */}
      {/* <CheckAuthState
        pending={<div>대기중</div>}
        member={<div>맴버입니다.</div>}
        payedMember={<div>유료회원입니다.</div>}
      >
        children 자리입니다.
      </CheckAuthState> */}
      <br/>
      <br/>
      <br/>- - - - - - - - - - - - - - -
    </div>
  )
}

export default inject("authStore")(observer(Navbar));