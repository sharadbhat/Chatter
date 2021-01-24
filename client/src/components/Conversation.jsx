import React, { Component } from 'react'
import { Comment } from 'antd'
import moment from 'moment'

// Utils
import { Context } from '../utils/Context'

class Conversation extends Component {
  render() {
    return (
      <div style={{ height: 450, overflow: 'scroll' }}>
        {this.context.state.messages.map(item => {
          return (
            <Comment
              actions={[]}
              author={item.createdBy}
              content={item.message}
              datetime={moment(item.createdAt).format('h:mm:ss A')}
            />
          )
        })}
        {this.context.state.isTyping &&
          <div>
            Typing...
          </div>
        }
      </div>
    )
  }
}

Conversation.contextType = Context

export default Conversation
