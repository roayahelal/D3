// @TODO: YOUR CODE HERE!
d3.csv("assets/data/data.csv").then(function(data) {
  var data = data;
    console.log(data[0]);
  
  
  var margin = {top: 30, right: 30, bottom: 30, left: 60},
  width = 500 ,
  height = 500;

  var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

        

  // Add X axis
  var max_age = (Math.max.apply(Math, data.map(row=> (row.age))))
  var min_age = (Math.min.apply(Math, data.map(row=> (row.age))))
  var x = d3.scaleLinear()
    .domain([min_age - 1, max_age + 1])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
    // Add label
  svg.append("text")             
    .attr("transform",
          "translate(" + (width + 5) + " ," + 
                         (height + 20) + ")")
    .style("text-anchor", "middle")
    .text("Age");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 30])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

    // Add lable
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Smoke value");

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.age);} )
      .attr("cy", function (d) { return y(d.smokes); } )
      .attr("r",6)
      .style("fill", "#69b3a2")
    });