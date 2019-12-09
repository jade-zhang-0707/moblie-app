// pages/my/my.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  
  goToNewsPage: function(){
    wx.navigateTo({
      url:'/pages/news/news',
    })
  },

  goToSettingsPage: function () {
    wx.navigateTo({
      url: '/pages/settings/settings',
    })
  },

  goToMine: function () {
    wx.navigateTo({
      url: '/pages/mypage/mine',
    })
  },

  goToHelp: function () {
    wx.navigateTo({
      url: '/pages/helpCenter/help',
    })
  },

  goToAdvice: function () {
    wx.navigateTo({
      url: '/pages/advice/advice',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})