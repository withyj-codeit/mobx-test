// login/index.tsx
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
// import { AuthStore } from '../../src/stores/AuthStore';
// interface Props {
//   authStore?: any
// }

const LoginPage = (props:any) => {
  const { authStore, emailData } = props
  const { authData, userData } = authStore
  const setEmail = e => authStore.setEmail(e.target.value);
  const setPassword = e => authStore.setPassword(e.target.value);
  return (
    <div>
      <h2>
        Email:
        <input
          type="email"
          placeholder="이메일을 입력하세요."
          value={authData.email}
          onChange={setEmail}
        />
      </h2>
      <h2>
        Password:
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={authData.password}
          onChange={setPassword}
        />
      </h2>
      <button
        onClick={() => authStore.login()}
      >login</button>
      <h3>token: {authStore.token}</h3>
      <button onClick={() => authStore.check()}>유저 정보 받기</button>
      <h3>getInitialProps Email: {emailData}</h3>
      {console.log("getinitialProps emaildata: ",emailData)}
      <h3>email: {userData.email?userData.email:"초기값"}</h3>
      <h3>username: {userData.username?userData.username:"초기값!!"}</h3>
      {/* <h1>실험중: {authStore.getUserData().email}</h1> */}
      {console.log("login index 파일의 authStore.userData.email:  " ,authStore.userData.email)}
    </div>
  )
}

LoginPage.getInitialProps = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:8000/api/auth/check',
    headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjM5NTM3NDcsImV4cCI6MTU2NDU1ODU0NywiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.QDdr_sA-j2IDoKa9uv3RFSMGUSk3ZKpN4M3EyPWvc8Y'}    
  })
  const emailData = res.data.info.email
  return { emailData }
}

export default inject('authStore')(observer(LoginPage))