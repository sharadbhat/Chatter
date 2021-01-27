import React, { Component } from 'react'

// Utils
import { Context } from '../utils/Context'
import genSentence from '../utils/typingIndicatorSentence'

class TypingIndicator extends Component {
  render() {
    if (this.context.state.isTyping) {
      let sentence = genSentence(this.context.state.usersTypingSet)
      return (
        <div style={{ height: 25 }}>
          <span>
            {sentence}
          </span>
        </div>
      )
    } else {
      return (<div style={{ height: 25 }} />)
    }
  }
}

TypingIndicator.contextType = Context

export default TypingIndicator
