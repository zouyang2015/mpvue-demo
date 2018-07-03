<script>
import {get} from './utils/request'
import qcloud from 'wafer2-client-sdk'
import config from './utils/config'
export default {
  created () {
    console.log('小程序启动了')

    const session = qcloud.Session.get()

    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    }

    // this.getData()
  },
  methods: {
    async getData () {
      const res = await get('/weapp/demo')
      console.log(444, res)
    }
  }
}
</script>

<style>
</style>
