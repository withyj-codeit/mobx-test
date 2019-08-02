// src/components/LoginTemplate.tsx
import * as React from 'react';
import { inject, observer } from 'mobx-react';

const LoginTemplate = (props:any) => {
  const { authStore } = props
  const { authData } = authStore

  const setEmail = (e) => authStore.setEmail(e.target.value)
  const setPassword = (e) => authStore.setPassword(e.target.value)
  // const setUsername = (e) => authStore.setUsername(e.target.value)

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

    </div>
  )
}
export default inject('authStore')(observer(LoginTemplate))