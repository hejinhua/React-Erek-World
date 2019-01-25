const express = require('express')
const router = express.Router()
const code = require('../utils/code')

var Mock = require('mockjs')

router.use('/auth-login', function(req, res) {
  console.log(req.body)
  // mock 模拟假数据
  var data = Mock.mock({
    code: code.LOGIN_SUCCESS_CODE,
    msg: '获取用户信息成功',
    data: {
      name: '彭道宽',
      gender: '男',
      id: 3,
      user_id: '1505060201',
      avatar: 'http://www.pengdaokuan.cn/static/assets/userpdk.jpeg'
    }
  })
  return res.json(data)
})

module.exports = router
