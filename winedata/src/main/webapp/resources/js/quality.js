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
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 460 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom,
    innerRadius = 80,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object to the body of the page
var svg = d3.select("#quality")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + ( height/2+100 )+ ")"); // Add 100 on Y translation, cause upper bars are longer


d3.json(url, function(data) {
	
	var quality = getname(args);
	var cnt = getcnt(args);
	
	// X scale
  var x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing ?
      .domain( data.map(function(d) { return quality; }) ); // The domain of the X axis is the list of states.

// Y scale
  var y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 1000]); // Domain of Y is from 0 to the max seen in the data

 // Add bars
  svg.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y(d['Value']); })
          .startAngle(function(d) { return x(quality); })
          .endAngle(function(d) { return x(quality) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius))

});

        },
        beforeSend: function () {
            $("#qualityList").empty();
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}
