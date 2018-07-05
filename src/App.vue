<script>
// import {get} from './utils/request'
import qcloud from 'wafer2-client-sdk'
import config from './utils/config'
import { showSuccess } from './utils/util'

export default {
  created () {
    console.log('小程序启动了')

    const userInfo = wx.getStorageSync('userInfo')

    if (userInfo) {
      console.log(2, 'userInfo', userInfo)
    //   // 第二次登录
    //   // 或者本地已经有登录态
    //   // 可使用本函数更新登录态
    //   qcloud.loginWithCode({
    //     success: res => {
    //       // this.setData({ userInfo: res, logged: true })
    //       console.log('登录成功1', res)
    //     },
    //     fail: err => {
    //       console.error(err)
    //       console.log('登录错误1', err.message)
    //     }
    //   })
    } else {
    // 首次登录
      qcloud.setLoginUrl(config.loginUrl)
      qcloud.login({
        success: res => {
          // this.setData({ userInfo: res, logged: true })
          console.log('登录成功2', res)
          wx.setStorageSync('userInfo', res)
          showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          console.log('登录错误2', err.message)
        }
      })
    }

    // this.getData()
  },
  methods: {
    async getData () {
      // const res = await get('/weapp/demo')
      // console.log(444, res)
    }
  }
}
</script>

<style>
</style>
