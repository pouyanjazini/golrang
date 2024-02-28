import React, { useState } from 'react'
import { message } from 'antd'
import request from '../../utils/request'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Password, Text, Checkbox, Select, Submit } from '../utils/Form'
import { GENDER_OPTIONS } from '../../utils/constant'
import Spinner from '../utils/Spinner'
import { usePerson } from '../../hooks/usePerson'

export default function Edit () {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const person = usePerson(id)

  function handleSubmit (values) {
    setLoading(true)
    request('/users', { method: 'put', data: values })
      .then(response => {
        message.success('کاربر با موفقیت بروزرسانی شد')
        navigate('/person')
      })
      .catch(err => message.error('متاسفانه خطایی پیش آمده.'))
      .finally(() => setLoading(false))
  }

  if (!person.id) {
    return <Spinner />
  }

  return (
    <Form name='basic' onFinish={handleSubmit} initialValues={person}>
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
