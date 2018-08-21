document.getElementById('file').addEventListener('change', readFile, false);
  function readFile (evt) {
    $('#file').fadeOut();
    $(".limiter").fadeIn();
    var files = evt.target.files;
    var file = files[0];           
    var reader = new FileReader();
    reader.onload = function(event) {
    process_file(event.target.result.split('\n'));            
  }
  reader.readAsText(file)
}

function process_file(data){
  let passed_count = 0;
  let failed_count = 0;
  data.shift()
  data.forEach((el,index)=>{
    var string = '<tr class="row100 body">';
      el.split(',').forEach((e,index)=>{
        if(e == 'Passed'){
          passed_count ++;
          string += `<td class="cell100 column${index} passed">${e}</td>\n`;
        }
        else if(e == 'Failed'){
          failed_count ++;
          string += `<td class="cell100 column${index} failed">${e}</td>\n`;
        }
        else{
          string += `<td class="cell100 column${index}">${e}</td>\n`;
        }
      });
      string += '</tr>';
      $("#table_body").append(string);
  });
  make_chart(passed_count,failed_count);
}


function make_chart(passed,failed){
  // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Passed');
        data.addColumn('number', 'Failed');
        data.addRows([
          ['Passed', passed],
          ['Failed', failed],
        ]);

        // Set chart options
        var options = {'title':'Test Report',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}
