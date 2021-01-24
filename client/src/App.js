import { Layout } from 'antd'

// Components
import UsernameInput from './components/UsernameInput'
import Chat from './components/Chat'

// Utils
import { Consumer, Provider } from './utils/Context'

// CSS
import './App.css'
import 'antd/dist/antd.css'
import { Fragment } from 'react'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Provider>
      <Layout style={{ height: '100vh' }}>
        <Header>
          <div className='logo' />
        </Header>
        <Content style={{ padding: '25px 50px 0px 50px' }}>
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
        <Footer style={{ textAlign: 'center' }}>Created by Sharad Bhat</Footer>
      </Layout>
    </Provider>
  )
}

export default App
