// components/regionMeteo/regionMeteo.js
import * as echarts from '../../ec-canvas/echarts';
Component({
  /**
   * Component properties
   */
  properties: {
    city: {
      type:Number,
      value:-1,
      observer:function(newval, oldval){
        //this._propertyChange(newval, oldval);
      }
    }
  },

  /**
   * Component initial data
   */
  data: {
    ec:{
      onInit: initChart
    },
    chartIndex: 1,
    meteo:[
      {
        city:1,
        weather:1,
        temperature:16,
        humidity:65,
        pm25:66,
        airquality: "良",
        indoorairquality:"优",
        indoortemperature: 23,
        indoorhumidity: 34,
      },
      {
        city: 2,
        weather: 2,
        temperature: 17,
        humidity: 65,
        pm25: 36,
        airquality: "优",
        indoorairquality: "良",
        indoortemperature: 17,
        indoorhumidity: 65,
      }
    ]
  },

  /**
   * Component methods
   */
  methods: {
    timeClick(e){
      let id = e.currentTarget.id.substr(
        e.currentTarget.id.indexOf("_") + 1);
      this.setData({
        chartIndex: id
      })
    }
  }
})

function initChart(canvas, width, height){
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jar', 'Fer', 'Mar', 'Apr', 'May', 'Jur', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33, 65, 30, 78, 40, 33]
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
        data: [12, 50, 51, 35, 70, 30, 20, 51, 35, 70, 30, 20]
    }, {
      name: 'C',
      type: 'line',
      smooth: true,
        data: [10, 30, 31, 50, 40, 20, 10, 31, 50, 40, 20, 10]
    }]
  };

  chart.setOption(option);
  return chart;
}
