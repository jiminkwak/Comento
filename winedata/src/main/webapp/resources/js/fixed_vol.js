$( document ).ready(function() {
    load_fixedvollist();
});
 
 
function load_fixedvollist(){
    
        var url="/winedata/fixedvollList";  
        
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
	
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 400, height = 400;

// append the svg object to the body of the page
var svg = d3.select("#fixed_vol")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
var myGroups = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
var myVars = ["0","0.1", "0.2","0.3", "0.4","0.5", "0.6","0.7", "0.8","0.9", "1",
				"1.1", "1.2","1.3", "1.4","1.5", "1.6","1.7", "1.8","1.9", "2"]


//Read the data
d3.json(url, function(data) {

  // Build X scales and axis:
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myGroups)
  .padding(0.05);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))

// Add X axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width/2 + 40)
      .attr("y", height + margin.top + 10)
      .text("Fixed Acidity");


  // Build X scales and axis:
var y = d3.scaleBand()
  .range([ height, 0 ])
  .domain(myVars)
  .padding(0.05);
svg.append("g")
  .call(d3.axisLeft(y));

// Y axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left -10)
      .attr("x", -margin.top - height/2 + 80)
      .text("Volatile Acidity")


// Build color scale
var myColor = d3.scaleLinear()
  .range(["white", "#3866F9"])
  .domain([1,100])

  svg.selectAll()
      .data(data, function(d) {return d.fixed_acidity+':'+d.volatile_acidity;})
      .enter()
      .append("rect")
      .attr("x", function(d) { return x(d.fixed_acidity) })
      .attr("y", function(d) { return y(d.volatile_acidity) })
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.value)} )

                
})
	
        },
        beforeSend: function () {
            $("#fixedvolList").empty();
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}