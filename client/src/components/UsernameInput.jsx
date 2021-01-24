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
  }

  render() {
    return (
      <div>
        <Input
          style={{ width: 250 }}
          placeholder={'Set username'}
          value={this.state.username}
          onChange={this.updateUsername}
          onPressEnter={this.setUsername}
        />
        <Button
          style={{ marginLeft: 10 }}
          type={'primary'}
          onClick={this.setUsername}
        >
          Submit
        </Button>
      </div>
    )
  }
}

UsernameInput.contextType = Context

export default UsernameInput
