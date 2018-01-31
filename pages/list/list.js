//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    list:[{
      latitude: 12,
      longitude: 12,
      name: '星巴克门店（营业中）',
      time: '借款时间：9:00-18:00',
      address: '浦东新区金高路35',
      num: '680cm'
    }, {
      name: '星巴克门店（营业中）',
      time: '借款时间：9:00-18:00',
      address: '浦东新区金高路35',
      num: '680cm'
      }, {
        name: '星巴克门店（营业中）',
        time: '借款时间：9:00-18:00',
        address: '浦东新区金高路35',
        num: '680cm'
    }, {
      name: '星巴克门店（营业中）',
      time: '借款时间：9:00-18:00',
      address: '浦东新区金高路35',
      num: '680cm'
    }]
  },
  onLoad: function () {
  },
  linkto: function (e){
    console.log(e)
    var data = e.currentTarget.dataset.data;
    var latitude = data.latitude;
    var longitude = data.longitude;
    var name = data.name;
    var address = data.address;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name,
      address: address
    })
  }
})
