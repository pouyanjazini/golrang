import React from 'react'
import {
  Button,
  Checkbox as AntCheckbox,
  Form,
  Input,
  Select as AntSelect
} from 'antd'

export { Form } from 'antd'

export function Text ({ label, name, required, ...props }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }]}>
      <Input {...props} />
    </Form.Item>
  )
}

export function Password ({ label, name, required, ...props }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }]}>
      <Input.Password {...props} />
    </Form.Item>
  )
}

export function Checkbox ({ name, children }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox>{children}</AntCheckbox>
    </Form.Item>
  )
}

export function Select ({ label, name, required, options, ...props }) {
  return (
    <Form.Item name={name} label={label} rules={[{ required }]}>
      <AntSelect {...props}>
        {options.map(({ label, value }) => (
          <AntSelect.Option key={value} value={value}>
            {label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export function Submit ({ label = 'ذخیره', ...props }) {
  return (
    <Form.Item>
      <Button type='primary' htmlType='submit' {...props}>
        {label}
      </Button>
    </Form.Item>
  )
}
