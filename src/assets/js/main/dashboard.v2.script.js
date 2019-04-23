$(document).ready(function() {

    $('#user_table').DataTable();
    $('#sales_table').DataTable();

    // Chart in Dashboard version 2
    let echartElem4 = document.getElementById('echart4');
    if (echartElem4) {
        let echart4 = echarts.init(echartElem4);
        echart4.setOption({
            ...echartOptions.lineNoAxis,
            ... {
                series: [{
                    data: [40, 80, 20, 90, 30, 80, 40],
                    lineStyle: {
                        color: 'rgba(102, 51, 153, .86)',
                        width: 3,
                        shadowColor: 'rgba(0, 0, 0, .2)',
                        shadowOffsetX: -1,
                        shadowOffsetY: 8,
                        shadowBlur: 10
                    },
                    label: { show: true, color: '#212121' },
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        borderColor: 'rgba(69, 86, 172, 0.86)'
                    }
                }]
            },
            xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
        });
        $(window).on('resize', function() {
            setTimeout(() => {
                echart4.resize();
            }, 500);
        });
    }
    // Chart in Dashboard version 2
    let echartElem5 = document.getElementById('echart5');
    if (echartElem5) {
        let echart5 = echarts.init(echartElem5);
        echart5.setOption({
            ...echartOptions.defaultOptions,
            ... {
                legend: {
                    show: true,
                    bottom: 0,
                },
                series: [{
                    type: 'pie',
                    ...echartOptions.pieRing,

                    label: echartOptions.pieLabelCenterHover,
                    data: [{
                        name: 'Completed',
                        value: 80,
                        itemStyle: {
                            color: '#663399',
                        }
                    }, {
                        name: 'Pending',
                        value: 20,
                        itemStyle: {
                            color: '#ced4da',
                        }
                    }]
                }]
            }
        });
        $(window).on('resize', function() {
            setTimeout(() => {
                echart5.resize();
            }, 500);
        });
    }
});