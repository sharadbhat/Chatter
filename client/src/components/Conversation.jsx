import React, { Component } from 'react'
import moment from 'moment'
import { v4 as uuid } from 'uuid';

// Utils
import { Context } from '../utils/Context'

class Conversation extends Component {
  render() {
    return (
      <div className={'conversationList'}>
          {this.context.state.messages.map(item => {
            if (item.type === 'info') {
              return (
                <div key={uuid()} style={{ textAlign: 'center' }}>
                  {item.message}
                </div>
              )
            } else {
              return (
                <div key={uuid()} className={'chatBoxContainer'}>
                  <div className={item.createdBy === this.context.state.username ? 'chatBox self' : 'chatBox'}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontWeight: 'bold' }}>{item.createdBy}</span>
                      <span style={{ fontSize: 12 }}>{moment(item.createdAt).format('h:mm:ss A')}</span>
                    </div>
                    {item.message}
                  </div>
                </div>
              )
            }
          })}
      </div>
    )
  }
}

Conversation.contextType = Context

export default Conversation
