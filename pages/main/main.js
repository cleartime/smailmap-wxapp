//index.js
//获取应用实例
const app = getApp()
var scale = 0;
Page({
  data: {
    latitude: '',
    longitude: '',
    controls: '',
    detail: false,
    markers: [{
      id: '',
      iconPath: '../../images/icon.png',
      longitude: '',
      latitude: '',
      width: 30,
      height: 30,
    }],
    polyline: '',
    scale: 15,
  },
  onLoad: function () {
    this.init();
  },
  init: function(){
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log('当前定位数据' + res)
        _this.setData({
          latitude: latitude,
          longitude: longitude
        })
        _this.setData({
          markers: [{
            iconPath: '../../images/icon.png',
            width: 30,
            height: 60,
            id: accuracy,
            latitude: latitude,
            longitude: longitude,
          }]
        })
      }
    })
  },
  linkto: function(){
    wx.navigateTo({
      url: '../list/list'
    })
  },
  markertap: function(e){
    this.setData({
      detail: true
    })
  },
  refresh: function(){
    this.onLoad();
    this.setData({
      scale: 15
    })
  },
  plus: function(){
    scale = this.data.scale;
    scale ++;
    this.setData({
      scale: scale
    })
  },
  reduce: function(){
    scale = this.data.scale;
    scale--;
    this.setData({
      scale: scale
    })
  }
})
