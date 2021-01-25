import React, { Component } from 'react'

// Utils
import { Context } from '../utils/Context'

class TypingIndicator extends Component {
  render() {
    return (
      <div style={{ height: 25 }}>
        {this.context.state.isTyping &&
          <span>
            Typing...
          </span>
        }
      </div>
    )
  }
}

TypingIndicator.contextType = Context

export default TypingIndicator
