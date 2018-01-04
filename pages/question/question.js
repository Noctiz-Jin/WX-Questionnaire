// pages/Question/question.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:[],
    questionText:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.pp == 1)
    {
      this.setData({
        questionText: "您的性别：",
        options: [
          { id: 11, content: "男" },
          { id: 12, content: "女" }]
      })
    } else if (options.pp == 2) {
      this.setData({
        questionText: "您的年龄：",
        options: [
          { id: 21, content: "0 - 13岁" },
          { id: 22, content: "14 - 18岁" },
          { id: 23, content: "19 - 25岁"},
          { id: 24, content: "26 - 35岁"},
          { id: 25, content: "36 - 45岁"},
          { id: 26, content: "46 - 55岁"},
          { id: 27, content: "56 - 65岁"},
          { id: 28, content: "66岁以上"}]
      })
    } else {

    }
  },

  chosen: function (event) {
    //console.log(event.currentTarget)
    var btnId = parseInt(event.currentTarget.id)
    var pp = parseInt(btnId / 10)
    var ch = btnId - pp * 10

    console.log(pp)
    console.log(ch)

    if (pp == 1) {
      if (ch == 1) {
        app.globalData.sex = 1
      } else if (ch == 2) {
        app.globalData.sex = 0
      }

      wx.redirectTo({
        url: '../question/question?pp=2',
      })
    } else if(pp == 2) {
      app.globalData.age = ch

      wx.redirectTo({
        url: '../result/result',
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