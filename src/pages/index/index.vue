<template>
  <div class="container" @click="clickHandle('test click', $event)">
1<br>1<br>1<br>1
    <button open-type="getUserInfo" @getuserinfo="login">获取用户信息</button>
    <open-data type="userAvatarUrl"></open-data>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      wx.request({
        url: 'https://mwhowgjk.qcloud.la/weapp/demo',
        method: 'GET',
        success (res) {
          console.log(res)
        },
        fail (err) {
          console.log('err', err)
        }
      })

      // 调用登录接口
      wx.login({
        success: (res) => {
          console.log('login', res)
        },
        fail: (err) => {
          console.log('err', err)
        }
      })
    },
    login () {

    },
    clickHandle (msg, ev) {
      // console.log('clickHandle:', msg, ev)
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
/** wxss **/
/** 修改button默认的点击态样式类**/
.button-hover {
  background-color: red;
}
/** 添加自定义button点击态样式类**/
.other-button-hover {
  background-color: blue;
}


.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50rpx;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
