<template>
  <div class="waikuang">
    <div id='map'></div>
  </div>
</template>
<script>
import headtitle from '../headtitle/headtitle.vue'
import areaData from './bsga.json';
export default {
  data() {
    return {
      titlename: '城运研判预警中心',
      vectors: []
    }
  },
  mounted() {
    this.initmap()
    this.mapAreas()
  },
  components: {
    headtitle
  },
  methods: {
    initmap() {
      this.map = new IMAP.Map('map', {
        minZoom: 1,
        maxZoom: 22,
        zoom: 15,
        center: new IMAP.LngLat(121.48, 31.4),
        animation: true,
        inertial: false,
        scrollWheel: true
      })
      this.addRoadNetLayer()
      // this.addLayersLk()
    },
    addRoadNetLayer() {
      var ROADNET_URL = "http://" + host + ":25033/v3/tile?x={x}&y={y}&z={z}";
      var getRoadTileUrl = function (x, y, z) {
        return ROADNET_URL.replace("{x}", x).replace("{y}", y).replace("{z}", z);
      }
      var RoadLayer = new IMAP.TileLayer({
        maxZoom: 23,
        minZoom: 3,
        tileSize: 256
      });
      RoadLayer.setTileUrlFunc(getRoadTileUrl);
      RoadLayer.setOpacity(0.9); //设置图层透明度，取值范围0-1
      this.map.addLayer(RoadLayer);
      return RoadLayer
    },
    addLayersLk() {
      var ROADLK_URL = 'http://'+ host +':8883/tile?lid=traffic&get=map&cache=off&x={x}&y={y}&z={z}&_dc='+ new Date().getTime();
      var getmapLuKuangUrl = function (x,y,z){
          return ROADLK_URL.replace("{x}",x).replace("{y}",y).replace("{z}",z);
      };
      var trafficLayslk = new IMAP.TileLayer({
        maxZoom:23,
        minZoom:3,
        tileSize : 256,
      });
      trafficLayslk.setTileUrlFunc(getmapLuKuangUrl);
      trafficLayslk.setOpacity(0.9)
      this.map.addLayer(trafficLayslk);
      return trafficLayslk
    },
    // 责任区划分
    mapAreas() {
      let that = this
      var data = areaData;
      var polygonArr = [];
      var pgo = new IMAP.PolygonOptions();
      pgo.fillOpacity = "0.1";
      pgo.strokeOpacity = "0.7";
      pgo.strokeWeight = "3";
      pgo.strokeStyle = IMAP.Constants.OVERLAY_LINE_SOLID;
      var opts = new IMAP.MarkerOptions();
      data.features.forEach((e, index) => {
        switch (e.properties.name) {
          case "网格区13035":
            polygonArr = [];
            this.vectors = []
            that.marker = null
            pgo.strokeColor = "#46b7ff";
            pgo.fillColor = "#46b7ff";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13035</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：1</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：1</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13035 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13035);
            //   window.closeInfoWindow = () => {
            //     that.map.getOverlayLayer().removeOverlay(this.infowindow13035)
            //   } 
            })
            
            break;
          case "网格区13042":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#00E2D3";
            pgo.fillColor = "#00E2D3";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13042</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：8</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13042 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13042);
            //     window.closeInfoWindow = () => {
            //     that.map.getOverlayLayer().removeOverlay(this.infowindow13042)
            //   } 
            })
            
            break;
          case "网格区13036":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#FF7835";
            pgo.fillColor = "#FF7835";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13036</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：1</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：0</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：0</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13036 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13036);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13036)
            // } 
            })
            
            break;
          case "网格区13038":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#fff661";
            pgo.fillColor = "#fff661";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13038</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：10</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13038 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13038);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13038)
            // } 
            })
            
            break;
          case "网格区13034":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#4287F5";
            pgo.fillColor = "#4287F5";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13034</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：5</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13034 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13034);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13034)
            // } 
            })
            
            break;
          case "网格区13033":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#57DB8F";
            pgo.fillColor = "#57DB8F";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13033</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：3</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：8</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13033 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13033); 
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13033)
            // }
            })
            
            break;
          case "网格区13030":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#F4F2C6";
            pgo.fillColor = "#F4F2C6";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13030</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：11</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：0</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13030 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13030);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13030)
            // } 
            })
            
            break;
          case "网格区13031":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#FEA72F";
            pgo.fillColor = "#FEA72F";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13031</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：9</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13031 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13031);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13031)
            // } 
            })
            
            break;
          case "网格区13032":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#8BD3E0";
            pgo.fillColor = "#8BD3E0";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13032</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：1</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：10</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：0</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13032 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13032);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13032)
            // } 
            })
            
            break;
          case "网格区13041":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#00B3DE";
            pgo.fillColor = "#00B3DE";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13041</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：10</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：2</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13041 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13041);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13041)
            // } 
            })
            
            break;
          case "网格区13040":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#8d7fec";
            pgo.fillColor = "#8d7fec";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13040</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：2</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：11</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13040 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13040);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13040)
            // } 
            })
            
            break;
          case "网格区13039":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#5085f2";
            pgo.fillColor = "#5085f2";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13039</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：1</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：0</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：0</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13039 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13039);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13039)
            // } 
            })
            
            break;
          case "网格区13037":
            polygonArr = [];
            that.marker = null
            pgo.strokeColor = "#f87be2";
            pgo.fillColor = "#f87be2";
            e.geometry.coordinates[0].forEach(item => {
              polygonArr.push(new IMAP.LngLat(item[0], item[1]));
            });
            var polygon = new IMAP.Polygon(polygonArr, pgo);
            this.vectors.push(polygon);
            polygon.addEventListener(IMAP.Constants.MOUSE_OVER, function(){
              // alert(1)
              var lnglat = new IMAP.LngLat(e.properties.cp[0], e.properties.cp[1]);
              var title = '信息展示';
              var content = `<div style="width:100px; height: 120px;border: 1px solid skyblue; background: rgba(6,47,74,0.85)">
              <div style="width:100px; height: 30px; background: rgba(5,40,60,0.61);font-size: 14px; line-height:30px; color:#ffffff;padding-left:4px;box-sizing: border-box">网格区13037</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">监督员数量：1</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">居委数量：0</div>
              <div style="width:100px; height: 30px;font-size: 12px; line-height:30px; color:#ffffff;padding-left:4px">村委数量：1</div>
              <div onclick='closeInfoWindow()' style='width: 14px; height:14px;position: absolute;right:-2px;top:-2px;background:#ffffff;border-radius: 50%;text-align:center;line-height:14px;font-size:12px;cursor: pointer'>x</div>
              </div>`
            //   this.infowindow13037 = new IMAP.InfoWindow(content, {
            //     title: title,
            //     position: lnglat,
            //     type: IMAP.Constants.OVERLAY_INFOWINDOW_CUSTOM
            //   });
            //   that.map.getOverlayLayer().addOverlay(this.infowindow13037);
            //   window.closeInfoWindow = () => {
            //   that.map.getOverlayLayer().removeOverlay(this.infowindow13037)
            // } 
            })
            
            break;
          // default:
            // break;
        }
      });
      this.map.getOverlayLayer().addOverlays(this.vectors, true);
      setTimeout(() => {
        this.map.setZoom(13.2);
      }, 300);
    },
  }
}
</script>

<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
}
.waikuang{
      width: 1920px;
      height: 1050px;
      position: absolute;
      left: 0;
      top: 15px;
      background-size: 100% 100%;
      background-image: url('./img/wkuang.png');
      #map{
          width: 1820px;
          height: 980px;
          position: absolute;
          left: 45px;
          top: 20px;
      }
    }
</style>

