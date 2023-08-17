document.addEventListener("DOMContentLoaded", function() {
    var graphData = JSON.parse('!{graphData}');
  
    var time = graphData.map(item => item.time);
    var carsParked = graphData.map(item => item.receiptnumber);
  
    var trace = {
      x: time,
      y: carsParked,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
      line: { shape: 'spline' }
    };
  
    var layout = {
      title: 'Parkers Over Time',
      xaxis: { title: 'Time' },
      yaxis: { title: 'Cars Parked' }
    };
  
    Plotly.newPlot('graph', [trace], layout);
  });
  