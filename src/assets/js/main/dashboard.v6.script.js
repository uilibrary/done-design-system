            // based on prepared DOM, initialize echarts instance
            var myChart = echarts.init(document.getElementById('line-graph'));
    
            // specify chart configuration item and data
            var option = {
                title: {
                    text: 'Daily sales'
                },
                background:{
                    color:['green']
                },
                tooltip: {},
                legend: {
                    data:['Sales']
                },
                xAxis: {
                    data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
                },
                yAxis: {},
                series: [{
                    name: 'Sales',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20, 25 ,35]
                }]
            };
    
            // use configuration item and data specified to show chart
            myChart.setOption(option);