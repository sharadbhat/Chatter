import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

const Context = React.createContext()

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      messages: [],
      isTyping: false
    }

    this.socket = socketIOClient('http://localhost:8000', {transports: ['websocket']})
  }

  componentDidMount = () => {
    this.setUpListeners()
    window.addEventListener('beforeunload', this.componentCleanup)
  }

  componentCleanup = () => {
    this.socket.disconnect()
  }

  componentWillUnmount = () => {
    this.componentCleanup()
    window.removeEventListener('beforeunload', this.componentCleanup)
  }
  
  setUpListeners = () => {
    this.socket.on('message', data => {
      this.setState({
        messages: [...this.state.messages].concat([data])
      })
    })

    this.socket.on('typingStart', () => {
      this.setState({
        isTyping: true
      })
    })

    this.socket.on('typingEnd', () => {
      this.setState({
        isTyping: false
      })
    })
  }

  setUsername = username => {
    this.setState({
      username
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          socket: this.socket,
          setUsername: this.setUsername
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context, Provider }

export const Consumer = Context.Consumer
