// pages/login/pages/vcode/vcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumble: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.iphone)
    this.setData({
      phoneNumble: options.iphone
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    this.navigateTo();
  },

  navigateTo() {
    wx.navigateTo({
      url: '../newpassword/newpassword?title=设置密码',
    })
  },
})