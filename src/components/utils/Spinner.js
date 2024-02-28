import { Space, Spin } from "antd";

export default function Spinner () {
  return (
    <Space>
      <Spin tip='Loading' size='large'>
        <div className='content' />
      </Spin>
    </Space>
  )
}
