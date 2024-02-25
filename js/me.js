

var options = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  chart: {
    type: 'bar',
    height: 450
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ],
  },
  title: {
    text: 'Population growth per country, 1951 to 2021',
    subtitle: 'Click on the legend below to filter by continent',
    align: 'left',
    margin:20,
    offsetY: 20,
    style: {
      fontSize: '20',
    } 
  }

};

var chart = new ApexCharts(document.querySelector("#phuwis"), options);
chart.render();

axios.get('https://phuwis.friendsnco.tech/api.php')
  .then(response => {
    console.log("Response : ",response);
    for(var obj of response){
      console.log("Obj : ",obj);
    }

  }).catch(err =>{
    console.log("err : ",err);
  })
