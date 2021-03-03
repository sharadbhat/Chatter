import React, { Component } from 'react'
import { Button, Input } from 'antd'

// Utils
import { Context } from '../utils/Context'

class UsernameInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null
    }
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  setUsername = () => {
    this.context.setUsername(this.state.username)
    this.context.sendMessage({
      type: 'info',
      createdBy: null,
      createdAt: Date.now(),
      message: `${this.state.username} has joined the room`
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Input
            size='large'
            style={{ width: 250, marginBottom: 10 }}
            placeholder={'Set username'}
            value={this.state.username}
            onChange={this.updateUsername}
            onPressEnter={this.setUsername}
          />
          <Button
            size='large'
            style={{ width: 150 }}
            type={'primary'}
            onClick={this.setUsername}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  }
}

UsernameInput.contextType = Context

export default UsernameInput
