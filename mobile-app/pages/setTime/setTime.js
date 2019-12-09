// pages/setTime/setTime.js
Page({
  repeatOn() {
    wx.navigateTo({
      url: '../repeatOn/repeatOn',
    })
  },
  repeatOff() {
    wx.navigateTo({
      url: '../repeatOff/repeatOff',
    })
  },
  time() {
    wx.navigateTo({
      url: '../time/time',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    isShow1:false,
    isShow2:false,
  },
  switch1Change(){
    this.setData({
      isShow1:!this.data.isShow1
    })
  },
  switch2Change() {
    this.setData({
      isShow2: !this.data.isShow2
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设置定时'
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

  }
})