import React, { Component } from 'react'
import BasicLayout from '../layout/BasicLayout'
import { showToast } from './utils'
import { checkSession } from '../service/user'

class Authorize extends Component {
  async componentWillMount() {
    const { history } = this.props
    if (process.env.NODE_ENV === 'production') {
      sessionStorage.setItem('authToken', 'IHnsua2+JFs4msIBs+isu1S') // 用户 token
    } else {
      const token = sessionStorage.getItem('authToken')
      try {
        await checkSession(token)
      } catch (err) {
        showToast({
          message: '会话已过期，请重新登陆',
          type: 'warning',
          duration: 1500
        })
        setTimeout(() => {
          history.replace('/login')
        }, 1500)
      }
    }
  }

  render() {
    return <BasicLayout />
  }
}

export default Authorize
