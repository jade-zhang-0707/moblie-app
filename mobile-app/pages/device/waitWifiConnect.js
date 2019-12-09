// pages/device/waitWifiConnect.js
Page({
  next(e){
    wx.navigateTo({
      url: '/pages/device/setWifiResult?state=' + (this.data.progress < 360 ? false:true)
    })
  },
  /**
   * Page initial data
   */
  data: {
    progress:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '连接到设备WI-FI',
    });
    
    let timer = setInterval(()=>{
      let value = this.data.progress;
      if(value == 359){
        clearInterval(timer);
      }
      this.setData({
        progress: ++value
      })
    }, 100);
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