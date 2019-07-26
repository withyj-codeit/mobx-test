import { observable, action, computed, runInAction } from "mobx";
import axios from 'axios'

class UserStore {
  @observable userState: string = "pending"
  //"pending", "guest", "member", "payedMember", "instructor", "admin"

  @computed get getUserState() {
    // this.applyAuthState2()
    return this.userState
  }

  @action
  async applyUserState() {
    const response = await axios({
      method: 'get',
      url:'http://localhost:8000/users/3',
      // withCredentials: true
    })

    runInAction(() => {
      const tempAuthState = response.data.state
      this.userState = tempAuthState
    })
  }

  @action
  async applyAuthState2() {
    const response = await axios({
      method: 'get',
      url:'http://localhost:8000/users/2',
      // withCredentials: true
    })

    runInAction(() => {
      const tempAuthState = response.data.state
      this.userState = tempAuthState
    })
  }

}

export { UserStore }