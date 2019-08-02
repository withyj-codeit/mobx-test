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
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }
  
  constructor(props:any) {
    super(props);
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