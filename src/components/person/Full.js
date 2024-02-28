import { Divider } from 'antd'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPerson } from '../../redux/actions/person'

export default function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()
  const person = useSelector(state => state.person)

  useEffect(() => {
    dispatch(getPerson(id))
  }, [])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام</label>
      <Divider type='vertical' />
      {person.name}
      <Divider />
      <label>ایمیل</label>
      <Divider type='vertical' />
      {person.email}
      <Divider />
      <Link to='/person'>بازگشت به لیست کاربران</Link>
    </div>
  )
}
