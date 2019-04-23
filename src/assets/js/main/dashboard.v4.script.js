$(document).ready(function() {
    $('#user_table').DataTable();
    $('#sales_table').DataTable();

    let echartElem1 = document.getElementById('echart1');
    if (echartElem1) {
        let echart1 = echarts.init(echartElem1);
        echart1.setOption({
            ...echartOptions.defaultOptions,
            ... {
                grid: echartOptions.gridAlignLeft,
                series: [{
                    data: [30, 40, 20, 50, 40, 80, 90, 40],
                    ...echartOptions.smoothLine,
                    lineStyle: {
                        color: '#4CAF50',
                        ...echartOptions.lineShadow
                    },
                    itemStyle: {
                        color: '#4CAF50'
                    }
                }]
            }
        });
        $(window).on('resize', function() {
            setTimeout(() => {
                echart1.resize();
            }, 500);
        });
    }

    let echartElem2 = document.getElementById('echart2');
    if (echartElem2) {
        let echart2 = echarts.init(echartElem2);
        echart2.setOption({
            ...echartOptions.defaultOptions,
            ... {
                grid: echartOptions.gridAlignLeft,
                series: [{
                    data: [30, 40, 20, 50, 40, 80, 90, 40],
                    ...echartOptions.smoothLine,
                    lineStyle: {
                        color: '#4CAF50',
                        ...echartOptions.lineShadow
                    },
                    itemStyle: {
                        color: '#4CAF50'
                    }
                }]
            }
        });
        $(window).on('resize', function() {
            setTimeout(() => {
                echart2.resize();
            }, 500);
        });
    }

    let echartElem3 = document.getElementById('echart3');
    if (echartElem3) {
        let echart3 = echarts.init(echartElem3);
        echart3.setOption({
            ...echartOptions.lineFullWidth,
            ... {
                series: [{
                    data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90],
                    ...echartOptions.smoothLine,
                    markArea: {
                        label: {
                            show: true
                        }
                    },
                    areaStyle: {
                        color: 'rgba(102, 51, 153, .15)',
                        origin: 'start'
                    },
                    lineStyle: {
                        // width: 1,
                        color: 'rgba(102, 51, 153, 0.68)',
                    },
                    itemStyle: {
                        color: '#663399'
                    }
                }, {
                    data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30],
                    ...echartOptions.smoothLine,
                    markArea: {
                        label: {
                            show: true
                        }
                    },
                    areaStyle: {
                        color: 'rgba(255, 152, 0, 0.15)',
                        origin: 'start'
                    },
                    lineStyle: {
                        // width: 1,
                        color: 'rgba(255, 152, 0, .6)',
                    },
                    itemStyle: {
                        color: 'rgba(255, 152, 0, 1)'
                    }
                }]
            }
        });
        $(window).on('resize', function() {
            setTimeout(() => {
                echart3.resize();
            }, 500);
        });
    }



});