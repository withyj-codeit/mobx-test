// pages/index.tsx
import * as React from 'react';
import nextCookie from 'next-cookies'

const MainPage:any = (props:any) => {
  return (
    <div><br/><br/><br/>
    메인 index 페이지 입니다!!
    <br/>
    {props.authStore.userData.email}
    <br/><br/><br/></div>
  )
}

MainPage.getInitialProps = async (ctx:any) => {
  const isServer = typeof window == 'undefined'
  if (isServer) {
    const { jwt } = nextCookie(ctx)
    await ctx.mobxStore.authStore.fetch(jwt)
  }
  return { authStore: ctx.mobxStore.authStore }
}

export default MainPage