<template>
  <div>
    图书列表页面
    {{openid}}<br>
    {{session_key}}
  </div>
</template>

<script>
const APP_ID = 'wx7dc100f1af86e8dc'
const APP_SECRET = '9a2f732e3f063e2d3cf32271c1464ab9'

export default {
  name: 'Me',
  data () {
    return {
      openid: '',
      session_key: ''
    }
  },
  created () {
    let that = this
    wx.login({
      success: (res) => {
        wx.request({
          // 获取openid接口
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: APP_ID,
            secret: APP_SECRET,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: (res) => {
            console.log(res.data)
            that.openid = res.data.openid
            that.session_key = res.data.session_key
          }
        })
      }
    })
  }
}
</script>

<style scoped>
</style>
