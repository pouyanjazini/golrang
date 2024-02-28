import React, { useEffect } from 'react'
import request from '../../utils/request'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { setPosts } from '../../redux/actions/post'
import Table from '../utils/Table'

const columns = [
  { key: 'id', title: 'شناسه' },
  { key: 'title', title: 'عنوان' },
  {
    key: 'action',
    render: (_, r) => (
      <>
        <Link to={`/post/${r.id}`}>
          <EyeOutlined />
        </Link>
      </>
    )
  }
]

function List (props) {
  useEffect(() => {
    request('/posts').then(({ data }) => props.setItems(data))
  }, [])

  return (
    <div>
      <Table columns={columns} data={props.posts} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
