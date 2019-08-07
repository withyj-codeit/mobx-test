// login/index.tsx
import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import LoginTemplate from '../../src/components/LoginTemplate'
import nextCookie from 'next-cookies'
// import { AuthStore } from '../../src/stores/AuthStore';
// interface Props {
//   authStore?: any
// }

const LoginPage = (props:any) => {

  return (
    <div>
      <h1>login index page: {props.authStore.userData.email}</h1>
      <LoginTemplate />
    </div>
  )
}

LoginPage.getInitialProps = async (ctx:any) => {
  const isServer = typeof window == 'undefined'
  if (isServer) {
    const { jwt } = nextCookie(ctx)
    await ctx.mobxStore.authStore.fetch(jwt)
  }
  return { authStore: ctx.mobxStore.authStore }
}

export default LoginPage