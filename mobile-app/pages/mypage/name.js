// pages/mypage/name.js
Page({

  /**
   * Page initial data
   */
  data: {
    name:"机器猫"
  },


  save: function () {
    wx.navigateTo({
      url: '/pages/mypage/mine',
    })

  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '昵称',
    });
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