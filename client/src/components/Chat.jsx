import React, { Component } from 'react'

// Components
import Conversation from './Conversation'
import ChatInput from './ChatInput'

class Chat extends Component {

  render() {
    return (
      <div>
        <Conversation />
        <div style={{ marginTop: 20 }} />
        <ChatInput />
      </div>
    )
  }
}

export default Chat
