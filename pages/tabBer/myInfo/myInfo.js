//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    luList: [
      // {
      //   icon: 'contact',
      //   name: '联系我们'
      // },
      {
        icon: 'about',
        name: '关于我们'
      },
      {
        icon: 'problem',
        name: '常见问题'
      }
    ]
  },
  onLoad: function() {
    console.log(app)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {

    if (this.data.hasUserInfo) {
      console.log('个人信息')
    } else {
      console.log(e, '授权登录')
      if (e.detail.errMsg === 'getUserInfo:ok') {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      }
    }


  },
  onBut(e){
  let name = e.target.dataset.name
  console.log(e)
  //

  if (name === 'contact'){
    console.log('contact')
    
  }else if(name === 'about'){
    console.log('about')
  }else if(name === 'problem'){
    console.log("problem")
    wx.navigateTo({
      url: '../../my/problem/problem',
    })
  }
  },
 
})