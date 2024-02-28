import React, { useEffect } from 'react'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined, EditFilled } from '@ant-design/icons'
import { connect } from 'react-redux'
import { getPeople } from '../../redux/actions/person'
import Table from '../utils/Table'

const columns = [
  { key: 'id', title: 'شناسه' },
  { key: 'name', title: 'نام ' },
  { key: 'username', title: 'نام کاربری' },
  { key: 'email', title: 'ایمیل' },
  {
    key: 'address',
    title: 'آدرس',
    render: (el, r) => `${el.city} ${el.alley} ${r.phone}`
  },
  {
    key: 'action',
    render: (_, r) => (
      <>
        <Link to={`/person/${r.id}`}>
          <EyeOutlined />
        </Link>
        <Link to={`/person/${r.id}/edit`}>
          <EditFilled />
        </Link>
      </>
    )
  }
]

function List (props) {
  useEffect(() => {
    props.getItems()
  }, [])

  return (
    <div>
      آخرین کاربر بازدید شده:
      <Divider type='vertical' />
      {props.person.name}
      <Divider />
      <Table columns={columns} data={props.people} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    people: state.people,
    person: state.person
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(getPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
