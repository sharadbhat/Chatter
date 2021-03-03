import { Fragment } from 'react'
import { Layout } from 'antd'

// Components
import UsernameInput from './components/UsernameInput'
import Chat from './components/Chat'

// Images
import logo512 from './images/logo512.png';

// Utils
import { Consumer, Provider } from './utils/Context'

// CSS
import './App.css'
import 'antd/dist/antd.css'

const { Header, Content } = Layout

function App() {
  return (
    <Provider>
      <Layout style={{ height: '100vh' }}>
        <Header>
          <img src={logo512} alt='logo' width={40} title='Chatter' />
        </Header>
        <Content className='content'>
          <div className='site-layout-content'>
            <Consumer>
              {context => (
                <Fragment>
                  {context.state.username === null &&
                    <UsernameInput />
                  }
                  {context.state.username === null ||
                    <Chat />
                  }
                </Fragment>
              )}
            </Consumer>
          </div>
        </Content>
      </Layout>
    </Provider>
  )
}

export default App
