import React, { Component } from 'react'

// Components
import Conversation from './Conversation'
import ChatInput from './ChatInput'

class Chat extends Component {

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: 800 }}>
          <Conversation />
          <div style={{ marginTop: 20 }} />
          <ChatInput />
        </div>
      </div>
    )
  }
}

export default Chat
