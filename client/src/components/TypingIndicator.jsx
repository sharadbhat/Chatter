import React, { Component } from 'react'
import arrayToSentence from 'array-to-sentence'

// Utils
import { Context } from '../utils/Context'

class TypingIndicator extends Component {
  render() {
    if (this.context.state.isTyping) {
      let sentence = ''
      let usersTypingSet = this.context.state.usersTypingSet
      if (usersTypingSet.size < 3) {
        sentence = arrayToSentence(Array.from(usersTypingSet))
        if (usersTypingSet.size > 1) {
          sentence += ' are typing...'
        } else {
          sentence += ' is typing...'
        }
      } else {
        sentence = 'Multiple users are typing...'
      }
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
