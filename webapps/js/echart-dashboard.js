
$(document).ready(function () {
    loadSalesChart(),
    loadUserChart(),
        loadIncomeChart(),
        loadTaxChart(),
        loadSalesAnalysis(),
        toggleIcon()

})
function loadSalesChart() {
    var SalesChart = echarts.init(document.getElementById('chart1'));

    // specify chart configuration item and data
    let bgColor = "#272d47";
    let color = [
        "#973378",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378"
    ];
    let echartData = [{
            name: "1",
            value1: 100
        },
        {
            name: "2",
            value1: 138
    
        },
        {
            name: "3",
            value1: 350,
        
        },
        {
            name: "4",
            value1: 173
       
        },
        {
            name: "5",
            value1: 180
         
        },
        {
            name: "6",
            value1: 150
          
        },
        {
            name: "7",
            value1: 180
           
        },
        {
            name: "8",
            value1: 230
           
        }
    ];
    
    let xAxisData = echartData.map(v => v.name);
    //  ["1", "2", "3", "4", "5", "6", "7", "8"]
    let yAxisData1 = echartData.map(v => v.value1);
    // [100, 138, 350, 173, 180, 150, 180, 230]
    let yAxisData2 = echartData.map(v => v.value2);
    // [233, 233, 200, 180, 199, 233, 210, 180]
    const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
          "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
    }
    
    option = {
        backgroundColor: bgColor,
        color: color,
        tooltip: {
            show:false,
        
        },
        grid: {
            top: 0,
            left:0,
            right:0,
            bottom:0,
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            show:false,
            axisLabel: {
                formatter: '',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: "value",
            name: '',
            show:false,
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#6C3F67"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: "",
            type: "line",
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        0,
                        [{
                                offset: 0,
                                color: hexToRgba(color[0], 0.6)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.6)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData1
        }]
    };


    // use configuration item and data specified to show chart
    SalesChart.setOption(option);
}

function loadTaxChart() {
    var SalesChart = echarts.init(document.getElementById('chart4'));

    // specify chart configuration item and data
    let bgColor = "#272d47";
    let color = [
        "#f1c40f",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378"
    ];
    let echartData = [{
            name: "1",
            value1: 100
        },
        {
            name: "2",
            value1: 138
    
        },
        {
            name: "3",
            value1: 350,
        
        },
        {
            name: "4",
            value1: 173
       
        },
        {
            name: "5",
            value1: 180
         
        },
        {
            name: "6",
            value1: 150
          
        },
        {
            name: "7",
            value1: 180
           
        },
        {
            name: "8",
            value1: 230
           
        }
    ];
    
    let xAxisData = echartData.map(v => v.name);
    //  ["1", "2", "3", "4", "5", "6", "7", "8"]
    let yAxisData1 = echartData.map(v => v.value1);
    // [100, 138, 350, 173, 180, 150, 180, 230]
    let yAxisData2 = echartData.map(v => v.value2);
    // [233, 233, 200, 180, 199, 233, 210, 180]
    const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
          "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
    }
    
    option = {
        backgroundColor: bgColor,
        color: color,
        tooltip: {
            show:false,
        
        },
        grid: {
            top: 0,
            left:0,
            right:0,
            bottom:0,
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            show:false,
            axisLabel: {
                formatter: '',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: "value",
            name: '',
            show:false,
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#6C3F67"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: "",
            type: "line",
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        0,
                        [{
                                offset: 0,
                                color: hexToRgba(color[0], 0.6)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.6)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData1
        }]
    };


    // use configuration item and data specified to show chart
    SalesChart.setOption(option);
}
function loadUserChart() {
    var SalesChart = echarts.init(document.getElementById('chart2'));

    // specify chart configuration item and data
    let bgColor = "#272d47";
    let color = [
        "#1abc9c",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378"
    ];
    let echartData = [{
            name: "1",
            value1: 100
        },
        {
            name: "2",
            value1: 138
    
        },
        {
            name: "3",
            value1: 350,
        
        },
        {
            name: "4",
            value1: 173
       
        },
        {
            name: "5",
            value1: 180
         
        },
        {
            name: "6",
            value1: 150
          
        },
        {
            name: "7",
            value1: 180
           
        },
        {
            name: "8",
            value1: 230
           
        }
    ];
    
    let xAxisData = echartData.map(v => v.name);
    //  ["1", "2", "3", "4", "5", "6", "7", "8"]
    let yAxisData1 = echartData.map(v => v.value1);
    // [100, 138, 350, 173, 180, 150, 180, 230]
    let yAxisData2 = echartData.map(v => v.value2);
    // [233, 233, 200, 180, 199, 233, 210, 180]
    const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
          "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
    }
    
    option = {
        backgroundColor: bgColor,
        color: color,
        tooltip: {
            show:false,
        
        },
        grid: {
            top: 0,
            left:0,
            right:0,
            bottom:0,
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            show:false,
            axisLabel: {
                formatter: '',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: "value",
            name: '',
            show:false,
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#6C3F67"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: "",
            type: "line",
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        0,
                        [{
                                offset: 0,
                                color: hexToRgba(color[0], 0.6)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.6)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData1
        }]
    };


    // use configuration item and data specified to show chart
    SalesChart.setOption(option);
}
function loadIncomeChart() {
    var SalesChart = echarts.init(document.getElementById('chart3'));

    // specify chart configuration item and data
    let bgColor = "#272d47";
    let color = [
        "#e74c3c",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378",
        "#f73378"
    ];
    let echartData = [{
            name: "1",
            value1: 100
        },
        {
            name: "2",
            value1: 138
    
        },
        {
            name: "3",
            value1: 350,
        
        },
        {
            name: "4",
            value1: 173
       
        },
        {
            name: "5",
            value1: 180
         
        },
        {
            name: "6",
            value1: 150
          
        },
        {
            name: "7",
            value1: 180
           
        },
        {
            name: "8",
            value1: 230
           
        }
    ];
    
    let xAxisData = echartData.map(v => v.name);
    //  ["1", "2", "3", "4", "5", "6", "7", "8"]
    let yAxisData1 = echartData.map(v => v.value1);
    // [100, 138, 350, 173, 180, 150, 180, 230]
    let yAxisData2 = echartData.map(v => v.value2);
    // [233, 233, 200, 180, 199, 233, 210, 180]
    const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
          "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
    }
    
    option = {
        backgroundColor: bgColor,
        color: color,
        tooltip: {
            show:false,
        
        },
        grid: {
            top: 0,
            left:0,
            right:0,
            bottom:0,
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            show:false,
            axisLabel: {
                formatter: '',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: "value",
            name: '',
            show:false,
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#6C3F67"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: "",
            type: "line",
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 10,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        0,
                        [{
                                offset: 0,
                                color: hexToRgba(color[0], 0.6)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.6)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData1
        }]
    };


    // use configuration item and data specified to show chart
    SalesChart.setOption(option);
}


function loadSalesAnalysis() {
    var AnalysisChart = echarts.init(document.getElementById('chart5'));

    option = {
        title: {
            text: '',
            x: 'center',
            y: 0,
            textStyle: {
                color: '#B4B4B4',
                fontSize: 16,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.6)',
            // formatter:"{b}:{c}"
            formatter: function (params) {
                let str = params[0].name + ' ' + params[0].data.stationName + '</br>';
                params.forEach(item => {
                    if (item.seriesName === '供温' || item.seriesName === '回温') {
                        str += item.marker + item.seriesName + ' : ' + item.data.value + ' ℃' + '</br>';
                    } else if (item.seriesName === '压力值(Mpa)') {
                        // 柱状图渐变时设置marker
                        item.marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#6C50F3;"></span>';
                        str += item.marker + item.seriesName + ' : ' + item.data.value + ' m';
                    }
                });
                return str;
            }
        },
        legend: {
            // 修改legend的高度宽度
            itemHeight: 5,
            itemWidth: 24,
            data: [{
                name: '供温',
                icon: 'rect' // legend的icon
            },
            {
                name: '回温',
                icon: 'rect'
            },
            {
                name: '压力值(Mpa)',
                icon: 'rect'
            }
            ],
            textStyle: {
                color: '#B4B4B4'
            },
            top: '7%',
            // 选择关闭的legend
            selected: {
                '回温': false
            }
        },
        grid: {
            x: '8%',
            width: '82%',
            y: '12%'
        },
        xAxis: [{
            // type:'category',
            data: ["1km", '2km', '3km', '4km', '5km', '6km'],
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: 'red'
                }
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            name: '供回温度(℃）',
            nameLocation: 'middle',
            nameTextStyle: {
                padding: [3, 4, 50, 6]
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'none'
                    // color: 'blue'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'pink'
                },
                formatter: '{value} '
            }
        },
        {
            name: '压力值(Mpa)',
            nameLocation: 'middle',
            nameTextStyle: {
                padding: [50, 4, 5, 6]
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'red'
                },
                formatter: '{value} '
            }
        }
        ],
        series: [{
            name: '供温',
            type: 'line',
            smooth: true,
            showSymbol: true,
            // 矢量画五角星
            symbol: 'path://M150 0 L80 175 L250 75 L50 75 L220 175 Z',
            symbolSize: 12,
            yAxisIndex: 0,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(250,180,101,0.3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(250,180,101,0)'
                    }
                    ]),
                    shadowColor: 'rgba(250,180,101,0.2)',
                    shadowBlur: 20
                }
            },
            itemStyle: {
                normal: {
                    color: 'green'
                }
            },
            // data中可以使用对象，value代表相应的值，另外可加入自定义的属性
            data: [{
                value: 1,
                stationName: "s1"
            }, {
                value: 3,
                stationName: "s2"
            }, {
                value: 4,
                stationName: "s3"
            }, {
                value: 9,
                stationName: "s4"
            }, {
                value: 3,
                stationName: "s5"
            }, {
                value: 2,
                stationName: "s6"
            }]
        },
        {
            name: '回温',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 12,
            yAxisIndex: 0,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: 'rgba(199, 237, 250,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(199, 237, 250,0.2)'
                        }
                        ],
                        false
                    )
                }
            },
            itemStyle: {
                normal: {
                    color: '#3bbc86'
                }
            },
            data: [{
                value: 31,
                stationName: "s1"
            }, {
                value: 36,
                stationName: "s2"
            }, {
                value: 54,
                stationName: "s3"
            }, {
                value: 89,
                stationName: "s4"
            }, {
                value: 73,
                stationName: "s5"
            }, {
                value: 22,
                stationName: "s6"
            }]
        },
        {
            name: '压力值(Mpa)',
            type: 'bar',
            barWidth: 30,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(108,80,243,0.3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(108,80,243,0)'
                    }
                    ]),
                    //柱状图圆角
                    barBorderRadius: [30, 30, 0, 0],
                }
            },

            data: [{
                value: 11,
                stationName: "s1"
            }, {
                value: 34,
                stationName: "s2"
            }, {
                value: 54,
                stationName: "s3"
            }, {
                value: 39,
                stationName: "s4"
            }, {
                value: 63,
                stationName: "s5"
            }, {
                value: 24,
                stationName: "s6"
            }]
        }
        ]
    }
    AnalysisChart.setOption(option);

};

// function openNav()
// {
//     var a = document.getElementById("#leftmenu");
//     var b = document.getElementById("body");
//     if(x.display===block){
//         a.
//     }
// else{}
    
// }
    
function toggleSlider(){
    document.getElementById("leftmenu").classList.toggle("active");
}




