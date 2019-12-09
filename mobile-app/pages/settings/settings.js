// pages/settings/settings.js
Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设置',
    });
  },

  goToAbout: function () {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },


  // 显示遮罩层
  showshadow: function (e) {
    if (this.data.chooseSize == false) {
      this.chooseSezi()
    } else {
      this.hideModal1()
    }
  },

  // 动画函数
  chooseSezi: function (e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(1000).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      chooseSize: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动 滑动时间
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        clearcart: false
      })
    }, 100)
  },
  // 隐藏
  hideModal1: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(700).step()
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 500)
  },

/*弹出框*/

showDialogBtn: function () {
  this.setData({
    showModal: true
  })
},
/**
 * 弹出框蒙层截断touchmove事件
 */
preventTouchMove: function () {
},
/**
 * 隐藏模态对话框
 */
hideModal2: function () {
  this.setData({
    showModal: false
  });
},
/**
 * 对话框取消按钮点击事件
 */
onCancel: function () {
  this.hideModal2();
},
/**
 * 对话框确认按钮点击事件
 */
onConfirm: function () {
  this.hideModal2();
  // wx.redirectTo({
  //   url: '/pages/index/index'
  // })
},


/*弹出框结束*/

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