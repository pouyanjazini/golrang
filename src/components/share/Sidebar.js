import { Layout } from 'antd'
import Menu from './Menu'

const { Sider } = Layout

export default function Sidebar () {
  return <Sider>
    <Menu />
  </Sider>
}
