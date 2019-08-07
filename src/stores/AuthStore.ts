import { observable, action, runInAction } from 'mobx';
import axios from 'axios'

class AuthStore {
  @observable private token = "기본값";
  @observable inProgress: Boolean = false;
  @observable authData = {
    email: '',
    password: '',
    username: '',
  };
  @observable userData = {
    email: '',
    username: '',
    userState: ''
  }

  constructor(initialData:any) {
    this.userData = initialData.userData
    // this.fetch(token)
  }

  @action setToken(token) { this.token = token }

  @action setEmail(email) { this.authData.email = email }
  @action setPassword(password) { this.authData.password = password }
  @action setUsername(username) { this.authData.username = username }

  @action async login() {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/auth/login',
      data: {
        email: this.authData.email,
        password: this.authData.password,
      }
    })

    runInAction(() => {
      document.cookie = `jwt=${response.data.token}`
    })
    console.log("token in AuthStore: ", this.token)
  }

  // 쿠키 속 jwt로 자동 로그인 하는 로직
  fetch = async (token) => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/api/auth/check',
      headers: {'jwt':token},
      withCredentials: true
    })
    const result = response.data.info
    console.log("result", result)
    this.setUserData(result);
  }

  fetch2 = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/api/auth/check',
      // headers: {'jwt':token},
      withCredentials: true
    })
    const result = response.data.info
    console.log("result", result)
    this.setUserData(result);
  }

  @action setUserData(userData) {
    this.userData.email = userData.email;
    this.userData.username = userData.username;
  }


  // logout할 때 가지고 있던 쿠키 만료 & 삭제 하는 로직

  // // @action reset() {
  // //   this.authData.email
  // //   this.authData.password
  // //   this.authData.username
  // // }

  // @action async register() {
  //   const response = await axios({
  //     method: 'post',
  //     url: 'http://localhost:8000/api/auth/register',
  //     data: {
  //       email: this.authData.email,
  //       password: this.authData.password,
  //       username: this.authData.username
  //     }
  //   })

  //   // 회원가입하고 쿠키에 토큰 넣는 로직 만들어야 함!!
  //   runInAction(() => {
  //     this.token = response.data.token
  //   })
  // }

  // @action async check() {
  //   const response = await axios({
  //     method: 'get',
  //     url: 'http://localhost:8000/api/auth/check',
  //     headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjM5NTM3NDcsImV4cCI6MTU2NDU1ODU0NywiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.QDdr_sA-j2IDoKa9uv3RFSMGUSk3ZKpN4M3EyPWvc8Y'}
  //   })

  //   runInAction(() => {
  //     this.userData.email = response.data.info.email
  //     this.userData.username = response.data.info.username
  //   })
  // }
}
export { AuthStore }