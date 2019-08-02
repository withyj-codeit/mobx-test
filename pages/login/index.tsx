// login/index.tsx
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import LoginTemplate from '../../src/components/LoginTemplate'
// import { AuthStore } from '../../src/stores/AuthStore';
// interface Props {
//   authStore?: any
// }

const LoginPage = () => {

  return (
    <div>
      <LoginTemplate />
    </div>
  )
}

LoginPage.getInitialProps = async ({ mobxStore }) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjQwMjIwMzksImV4cCI6MTU2NDYyNjgzOSwiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.RbOQaDH_wNsIt3BAydK2xQqvshMQMNDdzI1qmwgDM20'
  await mobxStore.authStore.fetch(token)
  return { authStore: mobxStore.authStore }
}

export default inject('authStore')(observer(LoginPage))