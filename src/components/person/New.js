import React, { useState } from 'react'
import { message } from 'antd'
import request from '../../utils/request'
import { useNavigate } from 'react-router-dom'
import { Form, Password, Text, Checkbox, Select, Submit } from '../utils/Form'
import { GENDER_OPTIONS } from '../../utils/constant'

export default function New () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  function handleSubmit (values) {
    console.log(values)
    setLoading(true)
    request('/users', { method: 'post', data: values })
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد')
        navigate('/person')
      })
      .catch(err => message.error('متاسفانه خطایی پیش آمده.'))
      .finally(() => setLoading(false))
  }

  return (
    <Form name='basic' onFinish={handleSubmit}>
      <Text label='نام' name='name' required placeholder='نام خود' />
      <Text label='نام کاربری' name='username' required />
      <Password label='رمز عبور' name='password' required />
      <Checkbox label name='admin'>
        مدیر
      </Checkbox>
      <Select
        name='gender'
        label='جنسیت'
        required
        allowClear
        options={GENDER_OPTIONS}
      />
      <Submit loading={loading} />
    </Form>
  )
}
