// pages/device/settingWifi.js
Page({
  bindPickerChange(e){
    this.setData({
      index:parseInt(e.detail.value)
    })
  },
  setWifi(e){
    wx.navigateTo({
      url: '/pages/device/setWifi'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    wifis:['a', 'b', 'c'],
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.setNavigationBarTitle({
      title: '设备WIFI',
    });
    wx.startWifi({
      success: function (res) {
        wx.getWifiList({
          success: function (res) {
            console.log(res);
          },
          fail: function (res) {
            console.log(res);
          }
        })
      }
    });
    wx.onGetWifiList(e=>{
      let wifis = [];
      e.wifiList.forEach(x=>wifis.push(x.SSID));
      _this.setData({
        wifis: wifis
      })
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