import { observable, action } from 'mobx';

class SideNavStore {
  @observable sideNavState:Boolean = false;

  @action toggleSideNavState() {this.sideNavState = !this.sideNavState}

}

export default SideNavStore