// pages/address/editAddress.js
import store from '../../store'
import create from '../../utils/create'

const app = getApp()

create(store, {
  modify(e){
    if(this.data.type == 0){
      e.detail.value.id = this.data.city.id;
    }
    this.store.saveAddress(e.detail.value);
    this.update();
    wx.navigateBack({
      delta: 1
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    city:null,
    type:0,   //0修改，1添加
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if(options.id){
      this.setData({
        city: this.store.data.address.find(x => x.id == options.id),
        type:0
      })
    } else {
      this.setData({
        city: {
          text:'',
          province:'',
          city:''
        },
        type:1
      })
    }
    
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