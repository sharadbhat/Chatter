import React, { Component } from 'react'
import { Button, Input } from 'antd'

import { SendOutlined } from '@ant-design/icons'

// Utils
import { Context } from '../utils/Context'

const { TextArea } = Input

class ChatInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userMessage: '',
    }
    
    this.isKeyDown = false
    this.keyDownTimer = null
    this.keyUpTimer = null
  }

  handleKeyDown = () => {
    if (this.isKeyDown === false) {
      this.context.setTypingStart()
    }
    
    window.clearTimeout(this.keyDownTimer)
    this.isKeyDown = true
    this.keyDownTimer = window.setTimeout(() => {
      this.isKeyDown = false
    }, 1000)
  }

  handleKeyUp = () => {
    window.clearTimeout(this.keyUpTimer)
    this.keyUpTimer = window.setTimeout(() => {
      this.context.setTypingEnd()
    }, 1000)
  }

  updateUserMessage = (e) => {
    this.setState({
      userMessage: e.target.value
    })
  }

  sendMessage = () => {
    if (this.state.userMessage) {
      this.context.sendMessage({
        type: 'message',
        createdAt: Date.now(),
        createdBy: this.context.state.username,
        message: this.state.userMessage,
      })
    }

    this.setState({
      userMessage: ''
    })
  }

  render() {
    return (
      <div>
        <TextArea
          placeholder={'Type message...'}
          rows={1}
          value={this.state.userMessage}
          onChange={this.updateUserMessage}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
        />
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 10 }}>
          <Button type='primary' onClick={this.sendMessage}>Send <SendOutlined /></Button>
        </div>
      </div>
    )
  }
}

ChatInput.contextType = Context

export default ChatInput
