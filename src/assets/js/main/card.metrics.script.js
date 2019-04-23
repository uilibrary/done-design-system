$(document).ready(function () {
        let echartElem1 = document.getElementById('echart1');
    if (echartElem1) {
        let echart1 = echarts.init(echartElem1);
        echart1.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
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
        $(window).on('resize', function () {
            setTimeout(() => {
                echart1.resize();
            }, 500);
        });
    }

    let echartElem2 = document.getElementById('echart2');
    if (echartElem2) {
        let echart2 = echarts.init(echartElem2);
        echart2.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					data: [6, 4, 7, 4, 6, 4, 1],
					...echartOptions.smoothLine,
					lineStyle: {
						color: '#df0029',
						...echartOptions.lineShadow
					},
					itemStyle: {
						color: '#df0029'
					}
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart2.resize();
            }, 500);
        });
    }

    let echartElem3 = document.getElementById('echart3');
    if (echartElem3) {
        let echart3 = echarts.init(echartElem3);
        echart3.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					data: [2, 2, 7, 4, 6, 4, 8],
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
        $(window).on('resize', function () {
            setTimeout(() => {
                echart3.resize();
            }, 500);
        });
    }

    let echartElem4 = document.getElementById('echart4');
    if (echartElem4) {
        let echart4 = echarts.init(echartElem4);
        echart4.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					data: [2, 2, 7, 4, 6, 4, 4],
					...echartOptions.smoothLine,
					lineStyle: {
						color: '#df0029',
						...echartOptions.lineShadow
					},
					itemStyle: {
						color: '#df0029'
					}
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart4.resize();
            }, 500);
        });
    }

    // Pie chart
    let echartElem5 = document.getElementById('echart5');
    if (echartElem5) {
        let echart5 = echarts.init(echartElem5);
        echart5.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartOptions.pieLineStyle,
					data: [{
						name: 'Email Subscription',
						value: 80,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}, {
						name: 'Registration',
						value: 20,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#df0029',
						}
					}]
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart5.resize();
            }, 500);
        });
    }

    // Pie chart
    let echartElem6 = document.getElementById('echart6');
    if (echartElem6) {
        let echart6 = echarts.init(echartElem6);
        echart6.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartOptions.pieLineStyle,
					data: [{
						name: 'Running',
						value: 40,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#ff9800',
						}
					}, {
						name: 'Completed',
						value: 60,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}]
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart6.resize();
            }, 500);
        });
    }

    // Pie chart
    let echartElem7 = document.getElementById('echart7');
    if (echartElem7) {
        let echart7 = echarts.init(echartElem7);
        echart7.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartOptions.pieLineStyle,
					data: [{
						name: 'Email Subscription',
						value: 80,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}, {
						name: 'Registration',
						value: 20,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#df0029',
						}
					}]
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart7.resize();
            }, 500);
        });
    }

    // Pie chart
    let echartElem8 = document.getElementById('echart8');
    if (echartElem8) {
        let echart8 = echarts.init(echartElem8);
        echart8.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartOptions.pieLineStyle,
					data: [{
						name: 'Running',
						value: 40,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#ff9800',
						}
					}, {
						name: 'Completed',
						value: 60,
						...echartOptions.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}]
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart8.resize();
            }, 500);
        });
    }

    // Bar chart
    let echartElem9 = document.getElementById('echart9');
    if (echartElem9) {
        let echart9 = echarts.init(echartElem9);
        echart9.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					type: 'bar',
					barWidth: 6,

					itemStyle: {
						color: '#ff9800',
						...echartOptions.lineShadow
					},
					data: [{
						name: 'Bar 1',
						value: 40
					}, {
						name: 'Bar 2',
						value: 60,
						itemStyle: {
							color: '#4CAF50'
						}
					}, {
						name: 'Bar 3',
						value: 80,
					}, {
						name: 'Bar 4',
						value: 70,
					}, {
						name: 'Bar 5',
						value: 60,
					}, {
						name: 'Bar 6',
						value: 70,
					}, {
						name: 'Bar 7',
						value: 80,
					}, {
						name: 'Bar 8',
						value: 40,
					}, {
						name: 'Bar 9',
						value: 70,
						itemStyle: {
							color: '#4CAF50'
						}
					}]
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart9.resize();
            }, 500);
        });
    }

    // Bar chart
    let echartElem10 = document.getElementById('echart10');
    if (echartElem10) {
        let echart10 = echarts.init(echartElem10);
        echart10.setOption({
			...echartOptions.defaultOptions, ...{
				series: [{
					type: 'bar',
					barWidth: 6,

					itemStyle: {
						color: '#ff9800',
						...echartOptions.lineShadow
					},
					data: [{
						name: 'Bar 1',
						value: 40
					}, {
						name: 'Bar 2',
						value: 60,
						itemStyle: {
							color: '#4CAF50'
						}
					}, {
						name: 'Bar 3',
						value: 80,
					}, {
						name: 'Bar 4',
						value: 70,
					}, {
						name: 'Bar 5',
						value: 60,
					}, {
						name: 'Bar 6',
						value: 70,
					}, {
						name: 'Bar 7',
						value: 80,
					}, {
						name: 'Bar 8',
						value: 40,
					}, {
						name: 'Bar 9',
						value: 70,
						itemStyle: {
							color: '#4CAF50'
						}
					}]
				}]
			}
		});
        $(window).on('resize', function () {
            setTimeout(() => {
                echart10.resize();
            }, 500);
        });
    }
    
});