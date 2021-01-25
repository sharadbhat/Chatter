import React, { Component } from 'react'

// Components
import Conversation from './Conversation'
import TypingIndicator from './TypingIndicator'
import ChatInput from './ChatInput'

class Chat extends Component {

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: 800 }}>
          <Conversation />
          <div style={{ marginTop: 15 }} />
          <TypingIndicator />
          <div style={{ marginTop: 15 }} />
          <ChatInput />
        </div>
      </div>
    )
  }
}

export default Chat
