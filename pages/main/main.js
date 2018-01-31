//index.js
//获取应用实例
const app = getApp()
var scale = 0;
Page({
  data: {
    item: {
      latitude: 31.25956,
      longitude: 121.52609,
      name: '星巴克门店（营业中）',
      time: '借款时间：9:00-18:00',
      address: '浦东新区金高路35',
      num: '680cm'
    },
    latitude: 31.25956,
    longitude: 121.52609,
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
        console.log('当前定位数据' + JSON.stringify(res))
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
  startmap: function(){
    var item = this.data.item;
    console.log(item)
    wx.openLocation({
      latitude: item.latitude,
      longitude: item.longitude,
      name: item.name,
      address: item.address
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
