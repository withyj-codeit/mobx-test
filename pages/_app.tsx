import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../src/components/layouts/Layout';
import { Provider } from 'mobx-react'
import { initializeStore } from '../src/stores/UtilStore'
// import { UserStore } from '../src/stores/UserStore'

// const userStore = new UserStore()

class MyApp extends App {
  mobxStore: any

  static async getInitialProps(appContext) {
    // console.log("cookie info: ", appContext.ctx.req.headers.cookie)
    // function getCookie(cookiename) {
    //   // Get name followed by anything except a semicolon
    //   const cookiestring=RegExp(""+cookiename+"[^;]+").exec(appContext.ctx.req.headers.cookie);
    //   // Return everything after the equal sign, or an empty string if the cookie name not found
    //   return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
    // }

    // const cookieValue = getCookie('jwt');
    // console.log("jwt value: ", cookieValue)
    const mobxStore = initializeStore();
    console.log("mobxStore: ", mobxStore)

    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }
  
  constructor(props:any) {
    super(props);
    console.log("in _app constructor ", props.initialMobxState.authStore)
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    );
  }
}

export default MyApp;