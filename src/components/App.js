import { Layout } from 'antd'
import Header from './share/Header'
import Footer from './share/Footer'
import Sidebar from './share/Sidebar'
import '../assets/css/general.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './general/Dashboard'
import PersonRouter from './person/Router'
import PostRouter from './post/Router'

const { Content } = Layout

function App () {
  return (
    <Layout>
      <Header />
      <Layout hasSider>
        <Sidebar />
        <Content className='content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/person/*' element={<PersonRouter />} />
            <Route path='/post/*' element={<PostRouter />} />
          </Routes>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
