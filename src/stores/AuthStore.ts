import { observable, action, runInAction, reaction } from 'mobx';
import axios from 'axios'

class AuthStore {
  // cookie에 token 넣어주는 로직 
  constructor(token) {
    // this.init(token);
    this.init2(token)

    reaction(
      () => this.token,
      token => {
        document.cookie = `jwt=${token}`
      }
    )
  }

  @observable inProgress: Boolean = false;
  @observable authData = {
    email: '',
    password: '',
    username: '',
  };
  @observable
  private token = '';

  @observable userData = {
    email: '',
    username: ''
  }

  @observable async getUserData() {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/api/auth/check',
      headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjM5NTM3NDcsImV4cCI6MTU2NDU1ODU0NywiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.QDdr_sA-j2IDoKa9uv3RFSMGUSk3ZKpN4M3EyPWvc8Y'}
    }).then(response => response)
    // console.log(response.data.info)
    return response
  }

  @action setEmail(email) {
    this.authData.email = email;
  }

  @action setPassword(password) {
    this.authData.password = password
  }

  @action setUsername(username) {
    this.authData.username = username
  }

  // @action reset() {
  //   this.authData.email
  //   this.authData.password
  //   this.authData.username
  // }

  @action async register() {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/auth/register',
      data: {
        email: this.authData.email,
        password: this.authData.password,
        username: this.authData.username
      }
    })

    // 회원가입하고 쿠키에 토큰 넣는 로직 만들어야 함!!
    runInAction(() => {
      this.token = response.data.token
    })
  }

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
      this.token = response.data.token
    })
  }

  @action async check() {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/api/auth/check',
      headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjM5NTM3NDcsImV4cCI6MTU2NDU1ODU0NywiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.QDdr_sA-j2IDoKa9uv3RFSMGUSk3ZKpN4M3EyPWvc8Y'}
    })

    runInAction(() => {
      this.userData.email = response.data.info.email
      this.userData.username = response.data.info.username
    })
  }
  @action
  private async init2(token: string) {
    // this.userData.email = token
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/api/auth/check',
      headers: {'x-access-token': `${token}`}
    })
    this.userData.email = response.data.info.email
    this.userData.username = response.data.info.username

    // runInAction(() => {
    //   this.userData.email = response.data.info.email
    //   this.userData.username = response.data.info.username
    // })
  }

  // init(token: string) {
  //   this.userData.email = token
  // }
}
export { AuthStore }