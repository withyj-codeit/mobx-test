import * as React from 'react'
import { inject, observer } from 'mobx-react';

const Header = (props:any) => {
  const { authStore } = props
  return (
    <div>hi
    <div>{authStore.userData.email}</div>
    </div>
  )

}

export default inject("authStore")(observer(Header))