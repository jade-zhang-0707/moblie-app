// pages/login/pages/newpassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.title);
    if (options.title){
      this.setNaivgationBarTitle(options.title);
    }else{
      this.setNaivgationBarTitle("重置密码");
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

  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    this.toastTap();
    //跳转到登录页面
    wx.redirectTo({ url: '../../index' })
  },

  toastTap() {
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 4000,
      mask: true,
    })
  },

  setNaivgationBarTitle(e) {
    const title = e;
    console.log(title);
    wx.setNavigationBarTitle({
      title,
      success() {
        console.log('setNavigationBarTitle success')
      },
      fail(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    });

    return false
  }
})