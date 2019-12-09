// pages/address/address.js
import store from '../../store'
import create from '../../utils/create'

const app = getApp()

create(store, {
  modify(e){
    wx.navigateTo({
      url: '/pages/address/editAddress?id=' + e.currentTarget.dataset.value
    })
  },
  add(e){
    wx.navigateTo({
      url: '/pages/address/editAddress'
    })
  },
  delete(e){
    this.store.deleteAddress(e.currentTarget.dataset.value);
    const pages = getCurrentPages()
    const perpage = pages[pages.length - 1]
    perpage.onLoad()  
  },
  /**
   * Page initial data
   */
  data: {
    address:null,
    show:false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '管理家庭',
    });
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
    const pages = getCurrentPages()
    const perpage = pages[pages.length - 1]
    perpage.onLoad()  
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