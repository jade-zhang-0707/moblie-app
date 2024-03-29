// pages/device/addDevice.js
Page({
  selectCategory(e){
    this.setData({
      currentCategory:e.currentTarget.dataset.value
    })
  },
  search(e){
    wx.navigateTo({
      url: '/pages/device/searchDevice'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    devices:[
      { id: 1, name: '美的'},
      { id: 2, name: '沁园' },
      { id: 3, name: '海尔' },
      { id: 4, name: 'Blur air' },
      { id: 5, name: '华为' },
    ],
    currentCategory:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加设备',
    });
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