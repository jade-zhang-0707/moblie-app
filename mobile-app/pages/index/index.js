//index.js
//获取应用实例
const app = getApp()

Page({
  swiperChange(e){
    this.setData({
      currentIndex: e.detail.current
    });
  },
  categoryTap(e){
    let id = e.currentTarget.id.substr(
      e.currentTarget.id.indexOf("_") + 1);
    this.setData({
      currentCategory: id
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    citys:[{
      id:1, cityname:"北京"
    }, {
      id:2, cityname:"上海"
    }],
    currentIndex:0,
    currentCategory:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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