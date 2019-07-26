import { inject, observer } from 'mobx-react'
import * as React from 'react';

interface Props {
  userStore?: any
  pending?: any
  guest?: any
  member?: any
  payedMember?: any
  instructor?: any
  admin?: any
}

const CheckUserState: React.FC<Props> = (props) => {
  const { userStore, pending, guest, member, payedMember, instructor, admin, children } = props
  const userTable = {
    "pending": pending,
    "guest": guest,
    "member": member,
    "payedMember": payedMember,
    "instructor": instructor,
    "admin": admin,
  }
  console.log(userStore.getUserState)
  return (
    <div>
      {userTable[userStore.getUserState]}
      {children}
    </div>
  )
}


export default inject("userStore")(observer(CheckUserState))