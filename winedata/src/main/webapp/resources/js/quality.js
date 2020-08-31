$( document ).ready(function() {
    load_qualitylist();
});


function getname(args){
	var name = [];
	
	for(var i=0;i<args.length;length){
		name[i] = args[i].quality;
	}
	return name;
}

function getcnt(args){
	var cnt =[];
	
	for(var i=0;i<args.length;length){
		cnt[i] = args[i].cnt;
	}
	return cnt;
}

function load_qualitylist(){
    
        var url="/winedata/qualityList";  
        
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
	
	// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'quality'
var svg = d3.select("#quality")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// 데이터 가져오기

var label = getname(args);
var value = getcnt(args);

// set the color scale
var color = d3.scaleOrdinal()
  .domain(label)
  .range(d3.schemeSet2);

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return value; })
var data_ready = pie(d3.entries(value))
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
var arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('mySlices')
  .data(data_ready)
  .enter()
  .append('path')
    .attr('d', arcGenerator)
    .attr('fill', function(d){ return(color(label)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

// Now add the annotation. Use the centroid method to get the best coordinates
svg
  .selectAll('mySlices')
  .data(data_ready)
  .enter()
  .append('text')
  .text(function(d){ return label})
  .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
  .style("text-anchor", "middle")
  .style("font-size", 17)


        },
        beforeSend: function () {
            $("#qualityList").empty();
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}
