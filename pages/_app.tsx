import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../src/components/layouts/Layout';
import { observer, Provider } from 'mobx-react'
import { AuthStore } from '../src/stores/AuthStore';
// import Router from 'next/router';

// const userStore = new UserStore()
// const authStore = new AuthStore()
// authStore.check()
console.log("class 밖입니다")

@observer
class MyApp extends App {
  userStore: any;
  authStore: any;
  constructor(props) {
    super(props);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjQwMjIwMzksImV4cCI6MTU2NDYyNjgzOSwiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.RbOQaDH_wNsIt3BAydK2xQqvshMQMNDdzI1qmwgDM20'
    console.log("App의 constructor가 시작됩니다!")
  
    this.authStore = new AuthStore(token);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjQwMjIwMzksImV4cCI6MTU2NDYyNjgzOSwiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.RbOQaDH_wNsIt3BAydK2xQqvshMQMNDdzI1qmwgDM20'
    // const authStore = new AuthStore(token)
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    
    // const getCookie = function(name) {
    //   const value = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    //   return value ? value[2] : null
    // }

    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjQwMjIwMzksImV4cCI6MTU2NDYyNjgzOSwiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.RbOQaDH_wNsIt3BAydK2xQqvshMQMNDdzI1qmwgDM20'
    // const userStore = new UserStore()
    // const authStore = new AuthStore(token)
    // authStore.check()
    console.log("pageProps?: ",pageProps)
    console.log("authstore: ",this.authStore)
    return (
      <Provider authStore={this.authStore}>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    );
  }
}

// MyApp.getInitialProps = async () => {
//   const res = await axios({
//     method: 'get',
//     url:'http://localhost:8000/users/2',
//   }).then(res => res.data)
//   return {res}
// }

// MyApp.getInitialProps = (context:any) => {
//   const res = axios({
//     method: 'get',
//     url:'http://localhost:8000/users/2',
//   }).then(res => res.data)

//   return {authState: res}
// }

export default MyApp;