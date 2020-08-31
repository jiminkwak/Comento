$( document ).ready(function() {
    load_freetotallist();
});
 
 
function load_freetotallist(){
    
        var url="/winedata/freetotalList";  
        
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
	
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 500,height = 500;

// append the svg object to the body of the page
var svg = d3.select("#free_total")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json(url, function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 80])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Add X axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width/2 + margin.left)
      .attr("y", height + margin.top + 40)
      .text("Free Sulfur Dioxide")


  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 300])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

// Y axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", -margin.top - height/2 + 100)
      .text("Total Sulfur Dioxide")


  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.free_sulfur_dioxide); } )
      .attr("cy", function (d) { return y(d.total_sulfur_dioxide); } )
      .attr("r", 3)
      .style("fill", "#69b3a2")
                
})
	
        },
        beforeSend: function () {
            $("#freetotalList").empty();
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}