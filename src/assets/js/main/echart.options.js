var echartOptions = {
    get smoothLine() {
        return {
            type: 'line',
            smooth: true
        }
    },
    get lineShadow() {
        return {
            shadowColor: 'rgba(0, 0, 0, .2)',
            shadowOffsetX: -1,
            shadowOffsetY: 8,
            shadowBlur: 10
        }
    },
    get gridNoAxis() {
        return {
            show: false,
            top: 5,
            left: 0,
            right: 0,
            bottom: 0
        }
    },
    get pieRing() {
        return {
            radius: ['50%', '60%'],
            selectedMode: true,
            selectedOffset: 0,
            avoidLabelOverlap: false,
        }
    },
    get pieLabelOff() {
        return {
            label: { show: false },
            labelLine: { show: false, emphasis: { show: false } },
        }
    },
    get pieLabelCenterHover() {
        return {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontWeight: 'bold'
                }
            }
        }
    },
    get pieLineStyle() {
        return {
            color: 'rgba(0,0,0,0)',
            borderWidth: 2,
            ...this.lineShadow
        }
    },
    get pieThikLineStyle() {
        return {
            color: 'rgba(0,0,0,0)',
            borderWidth: 12,
            ...this.lineShadow
        }
    },
    get gridAlignLeft() {
        return {
            show: false,
            top: 6,
            right: 0,
            left: '-6%',
            bottom: 0
        }
    },
    get defaultOptions() {
        return {
            grid: {
                show: false,
                top: 6,
                right: 0,
                left: 0,
                bottom: 0
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show: true
            },
            yAxis: {
                type: 'value',
                show: false
            }
        }
    },
    get lineFullWidth() {
        return {
            grid: {
                show: false,
                top: 0,
                right: '-9%',
                left: '-8.5%',
                bottom: 0
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: {
                type: 'category',
                show: true
            },
            yAxis: {
                type: 'value',
                show: false,
            }
        }
    },
    get lineNoAxis() {
        return {
            grid: this.gridNoAxis,
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, .1)'
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
                        color: '#ccc'
                    }
                }
            }
        }
    }
}