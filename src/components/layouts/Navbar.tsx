import { inject, observer } from 'mobx-react'
import * as React from 'react';
import CheckAuthState from '../../CheckAuthState'

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

const Navbar: React.FC<Props> = (props) => {
  const { userStore } = props
  console.log(userStore)
  return (
    <div className="navbar-wrapper">
      Navbar
      <br/>
      <button>회원가입</button>
      <button onClick={() => userStore.applyUserState()}>로그인</button>
      <br/>
      <CheckAuthState
        pending={<div>대기중</div>}
        member={<div>맴버입니다.</div>}
        payedMember={<div>유료회원입니다.</div>}
      >
        children 자리입니다.
      </CheckAuthState>
      <br/>
      {userStore.userState}
      <br/>
      <br/>- - - - - - - - - - - - - - -
    </div>
  )
}

export default inject("userStore")(observer(Navbar));