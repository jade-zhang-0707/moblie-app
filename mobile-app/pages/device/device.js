import store from '../../store'
import create from '../../utils/create'

const app = getApp()

create(store, {
  addDevice(e){
    wx.navigateTo({
      url: '/pages/device/addDevice'
    })
  },
  goToAddressManage(e){
    this.setData({
      showAddressList: false
    })
    wx.navigateTo({
      url:'/pages/address/address'
    })
  },
  switchAddressList(e){
    this.setData({
      showAddressList: !this.data.showAddressList
    })
  },
  clearState(e){
    this.setData({
      showAddressList: false
    })
  },
  selectedAddressItem(e){
    let id = e.currentTarget.id.substr(
      e.currentTarget.id.lastIndexOf("-") + 1);
    this.setData({
      currentAddress: id,
      showAddressList:false
    })
  },
  /**
   * Page initial data
   */
  data: {
    showAddressList:false,
    address:null,
    currentAddress:1,
    devices:[{}]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
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