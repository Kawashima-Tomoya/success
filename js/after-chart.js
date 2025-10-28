var dom = document.getElementById('chart-container-after');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  title: {
    subtext: '2025年',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      color: ['#37A2DA', '#32C5E9', '#adc8c8', '#9FE6B8', '#FFDB5C', '#ff9f7f'],
      radius: '60%',
      data: [
        { value: 16, name: 'ハイスキル：16' },
        { value: 15, name: 'ミドルスキル：15' },
        { value: 26, name: 'ロースキル：26' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
