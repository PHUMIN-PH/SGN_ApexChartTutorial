var options = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  chart: {
    type: 'bar',
    height: 380
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: 'bottom'
      },
    }
  },
  colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
    '#f48024', '#69d2e7'
  ],
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      colors: ['#fff']
    },

    // =========== Text formatter 
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
    },
    // ===================
    
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'India'
    ],
  },
  yaxis: {
    labels: {
      show: true
    }
  },
  title: {
    text: 'Population growth per country, 1951 to 2021',
    align: 'center',
    floating: true
  },
  subtitle: {
    text: 'Click on the legend below to filter by continent',
    align: 'center',
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: true
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#phuwis"), options);
chart.render();

axios.get('https://phuwis.friendsnco.tech/api.php')
  .then(response => {
    console.log("Response : ", response);
    for (var obj of response) {
      console.log("Obj : ", obj);
    }

  }).catch(err => {
    console.log("err : ", err);
  })
