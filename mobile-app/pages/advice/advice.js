// pages/advice/advice.js
Page({

  /**
   * Page initial data
   */
  data: {
    status:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '意见反馈',
    });
  },

  /* 文本框聚焦时更改状态*/
  focus: function (e) {
    this.setData({
      status: 1
    })
  },
  /* 文本框失焦时更改状态*/
  blur: function (e) {
    this.setData({
      status: 0
    })
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