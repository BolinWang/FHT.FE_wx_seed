//index.js
const app = getApp()
import fetch from '../../utils/api'

Page({
  data: {},
  // 分享
  onShareAppMessage (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '复恒小程序基建',
      path: '/pages/index/index',
      success (res) {

      },
      fail (res) {

      }
    }
  }
})
