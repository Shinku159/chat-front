import React from 'react'
import chatIcon from '../../assets/icons/chat.svg'
import createChatIcon from '../../assets/icons/create-chat.svg'
import requestIcon from '../../assets/icons/friend-request.svg'
import Button from '../button'
import styles from "./options.module.css"

function Options() {
  return (
    <div className={styles.container}>
      <Button type="icon" icon={chatIcon} iconAlt="chat" height="35px" width="35px"/>
      <Button type="icon" icon={createChatIcon} iconAlt="create-chat" height="35px" width="35px"/>
      <Button type="icon" icon={requestIcon} iconAlt="friend-request" height="35px" width="35px"/>
    </div>
  )
}

export default Options