// pages/repeat/repeat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekdays: [
      { name: 'MON', value: '星期一' },
      { name: 'TUE', value: '星期二' },
      { name: 'WED', value: '星期三' },
      { name: 'THU', value: '星期四' },
      { name: 'FRI', value: '星期五' },
      { name: 'SAT', value: '星期六' },
      { name: 'SUN', value: '星期日' },
    ],
    radioShow:false,
  },
  radio() {
    this.setData({
      radioShow: !this.data.radioShow
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '重复'
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